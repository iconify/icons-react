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
		"content": `<style>.cm8lo6v1l {
  d: path("m12 2.75l6.6 2.45a1 1 0 0 1 .65.94v5.26c0 4.4-2.9 7.6-7.25 9.85C7.65 19 4.75 15.8 4.75 11.4V6.14a1 1 0 0 1 .65-.94Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr1buwbcr {
  d: path("m7.5 14.25l1.75-5.5l1.75 5.5M8.1 12.6h2.3M13 8.75v5.5h.75a2.75 2.75 0 0 0 0-5.5Z");
}
</style><g class="hntgybcog"><path class="cm8lo6v1l"/><path class="nr1buwbcr"/></g>`,
		"fallback": "iconoven:ad-block-shield",
	});
}

export default Component;
