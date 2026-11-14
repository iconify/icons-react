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
		"content": `<style>.h10f9bcep {
  d: path("m10.121 8.904l2.475 2.475l-6.717 6.717l-2.475-2.475ZM14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ym5bs9qym {
  d: path("M15.195 3.561a4 4 0 1 1-4.634 3.244");
}
</style><g class="ulnmmdpxh"><path class="ym5bs9qym"/><path class="h10f9bcep"/></g>`,
		"fallback": "uix-sharp:corrective-action",
	});
}

export default Component;
