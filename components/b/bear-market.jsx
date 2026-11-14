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

.p-xk61mdx {
  d: path("M15.5 13.5h4v-4");
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.svkwq82ml {
  d: path("m7 5.5l4 5L14 8l5.5 5.5");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="svkwq82ml"/><path class="p-xk61mdx"/></g>`,
		"fallback": "uix:bear-market",
	});
}

export default Component;
