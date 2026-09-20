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
		"content": `<style>.m55bj8kzz {
  fill: currentColor;
  d: path("M7.4 15.5h4.475v-1.25h-3.1V8.5H7.4zm6.7 0h1.375V9.75H17.6V8.5h-5.625v1.25H14.1zM2 20V8q0-1.65 1.175-2.825T6 4h12q1.65 0 2.825 1.175T22 8v12z");
}
</style><path class="m55bj8kzz"/>`,
		"fallback": "material-symbols:game-trigger-left",
	});
}

export default Component;
