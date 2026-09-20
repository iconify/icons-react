import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l0wly-bit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.505 41.025V19.978c0-7.181-5.821-13.003-13.002-13.003S5.5 12.797 5.5 19.978v21.047");
}

.m6cu8hb_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.51 30.029l10.995 10.996L42.5 30.029");
}
</style><path class="m6cu8hb_q"/><path class="l0wly-bit"/>`,
		"fallback": "arcticons:emoji-anticlockwise-triangle-headed-top-u-shaped-arrow",
	});
}

export default Component;
