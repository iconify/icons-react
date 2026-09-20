import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xj39zfbhx {
  fill: currentColor;
  d: path("M7.4 15.5h4.475v-1.25h-3.1V8.5H7.4zm6.7 0h1.375V9.75H17.6V8.5h-5.625v1.25H14.1zM2 20V8q0-1.65 1.175-2.825T6 4h12q1.65 0 2.825 1.175T22 8v12zm2-2h16V8q0-.825-.587-1.412T18 6H6q-.825 0-1.412.588T4 8zm0 0h16z");
}
</style><path class="xj39zfbhx"/>`,
		"fallback": "material-symbols:game-trigger-left-outline-sharp",
	});
}

export default Component;
