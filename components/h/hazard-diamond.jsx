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
		"content": `<style>.orcf2kb2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.475 5.282l4.243 4.243a3.5 3.5 0 0 1 0 4.95l-4.243 4.243a3.5 3.5 0 0 1-4.95 0l-4.243-4.243a3.5 3.5 0 0 1 0-4.95l4.243-4.243a3.5 3.5 0 0 1 4.95 0M12 7v6.25m0 3.5h.01");
}
</style><path class="orcf2kb2l"/>`,
		"fallback": "uix:hazard-diamond",
	});
}

export default Component;
