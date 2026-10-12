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
		"content": `<style>.zyn38z2pb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75C10 5.25 8.25 7.5 8.25 9.5a3.75 3.75 0 0 0 7.5 0c0-2-1.75-4.25-3.75-6.75m-7 14q1.75-1 3.5 0t3.5 0t3.5 0t3.5 0m-10.5 3.5q1.75-1 3.5 0t3.5 0");
}
</style><path class="zyn38z2pb"/>`,
		"fallback": "iconoven:humidity",
	});
}

export default Component;
