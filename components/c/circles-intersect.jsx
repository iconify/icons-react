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
		"content": `<style>.an1njnd3j {
  d: path("M2.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.fzrpjd9it {
  d: path("M9.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="an1njnd3j"/><path class="fzrpjd9it"/></g>`,
		"fallback": "uix:circles-intersect",
	});
}

export default Component;
