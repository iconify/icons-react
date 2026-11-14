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
		"content": `<style>.hng2hsm0v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 6q0-3 3-3t3 3t-3 3t-3-3m18 3q0-3-3-3t-3 3t3 3t3-3M10 21q-3 0-3-3t3-3t3 3t-3 3");
}
</style><path class="hng2hsm0v"/>`,
		"fallback": "uix-solid:gnat",
	});
}

export default Component;
