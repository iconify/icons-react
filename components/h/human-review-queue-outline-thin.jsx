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

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.ph-bhccoq {
  d: path("M10 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.pt-3kkb2k {
  d: path("M9 11h6");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="ph-bhccoq"/><path class="pt-3kkb2k"/></g>`,
		"fallback": "iconmind:human-review-queue-outline-thin",
	});
}

export default Component;
