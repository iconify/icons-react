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
		"content": `<style>.b3-kqtb-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 13.25c-1-1-3.5-1.25-3.5 1.5c0 1.75.75 2.5 1 3.75l.75 2.25h.75l1-2.5l1 2.5h.75L10 18.5c.25-1.25 1-2 1-3.75c0-2.75-2.5-2.5-3.5-1.5m5.672-4.896l3.182-3.182a1.75 1.75 0 0 1 2.474 0a1.75 1.75 0 0 1 0 2.474l-3.182 3.182a1.75 1.75 0 0 1-2.474 0a1.75 1.75 0 0 1 0-2.474M18.75 5.25L21 3m-8 8l-2.25 2.25");
}
</style><path class="b3-kqtb-q"/>`,
		"fallback": "uix:dental-anaesthesia",
	});
}

export default Component;
