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
		"content": `<style>.n2cq8obgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.049 8.163l4.011 7.119a3.5 3.5 0 0 1-3.049 5.218H7.989a3.5 3.5 0 0 1-3.049-5.218l4.011-7.119a3.5 3.5 0 0 1 6.098 0M12 9.5V14m0 3h.01");
}
</style><path class="n2cq8obgj"/>`,
		"fallback": "uix:danger-sign",
	});
}

export default Component;
