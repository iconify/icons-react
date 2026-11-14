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
		"content": `<style>.b07sndb0f {
  d: path("M8.25 2.5h7.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 15.75 7h-7.5A1.75 1.75 0 0 1 6.5 5.25v-1A1.75 1.75 0 0 1 8.25 2.5M6.125 9.75h11.75a2.625 2.625 0 0 1 2.625 2.625v6.5a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 18.875v-6.5A2.625 2.625 0 0 1 6.125 9.75");
}

.b2qpi511l {
  d: path("M6.5 15.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b07sndb0f"/><path class="b2qpi511l"/></g>`,
		"fallback": "uix:amp-stack",
	});
}

export default Component;
