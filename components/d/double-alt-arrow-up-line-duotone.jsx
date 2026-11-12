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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mad_geb1c {
  d: path("M19 17L12 11L5 17");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.qowkc_bfp {
  d: path("M19 13L12 7L5 13");
}
</style><g class="hntgybcog"><path class="qowkc_bfp"/><path class="mad_geb1c"/></g>`,
		"fallback": "solar:double-alt-arrow-up-line-duotone",
	});
}

export default Component;
