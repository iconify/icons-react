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
		"content": `<style>.gmikdxb7d {
  d: path("M2.5 6C6 5 9 6 12 7.5C15 6 18 5 21.5 6c0 4-2.5 7.5-6 7.5c-2 0-2.75-1.5-3.5-2.5c-.75 1-1.5 2.5-3.5 2.5c-3.5 0-6-3.5-6-7.5Zm15.75 6.75l1.5 7.75");
}

.mbesug8jl {
  d: path("M5.75 9a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0Zm8 0a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gmikdxb7d"/><path class="mbesug8jl"/></g>`,
		"fallback": "uix-sharp:carnival-mask",
	});
}

export default Component;
