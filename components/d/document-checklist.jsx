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
		"content": `<style>.ccm83vb-y {
  d: path("M8.5 3.5h7A3.5 3.5 0 0 1 19 7v10a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 17V7a3.5 3.5 0 0 1 3.5-3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utwoapf-j {
  d: path("m8.5 9l1.5 1.5l2.5-3m-4 7.5l1.5 1.5l2.5-3M14 9h2m-2 6h2");
}
</style><g class="hntgybcog"><path class="ccm83vb-y"/><path class="utwoapf-j"/></g>`,
		"fallback": "uix:document-checklist",
	});
}

export default Component;
