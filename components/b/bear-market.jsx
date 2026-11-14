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
		"content": `<style>.p-xk61mdx {
  d: path("M15.5 13.5h4v-4");
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.svkwq82ml {
  d: path("m7 5.5l4 5L14 8l5.5 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p8u760b4u"/><path class="svkwq82ml"/><path class="p-xk61mdx"/></g>`,
		"fallback": "uix-sharp:bear-market",
	});
}

export default Component;
