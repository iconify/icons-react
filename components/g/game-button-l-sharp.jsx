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
		"content": `<style>.v_r1bgb6x {
  fill: currentColor;
  d: path("M2 20V8q0-1.65 1.175-2.825T6 4h12q1.65 0 2.825 1.175T22 8v12zm8.575-4.475h4.35v-1.3H11.95V8.5h-1.375z");
}
</style><path class="v_r1bgb6x"/>`,
		"fallback": "material-symbols:game-button-l-sharp",
	});
}

export default Component;
