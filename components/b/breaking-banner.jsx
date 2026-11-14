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
		"content": `<style>.k39wjhbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8H14l2.5-1.5l1.75 3l3-.25L19.5 12l1.75 2.75l-3-.25l-1.75 3L14 16H4.5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m1 4H11");
}
</style><path class="k39wjhbtg"/>`,
		"fallback": "uix:breaking-banner",
	});
}

export default Component;
