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
		"content": `<style>.e-el1ezix {
  d: path("M17.25 13c-3.25 0-5.75 1.5-5.75 5v3.5");
}

.exdyo7bvy {
  fill: currentColor;
  d: path("M10 17.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ocyf5ip6z {
  d: path("M8 21.5v-4c-2.5-1.75-3.5-4.25-3.5-7C4.5 6.25 7.75 3 12 3c4 0 7 2.75 7 6.75l1.5 3.5c.25.5-.1 1-.75 1H19v2.25c0 1.1-.9 2-2 2h-2v3");
}

.rue4nfbsj {
  d: path("m18.5 18.25l1.75 1.25M19.5 16l2 .25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ocyf5ip6z"/><path class="e-el1ezix"/><path class="exdyo7bvy"/><path class="rue4nfbsj"/></g>`,
		"fallback": "uix-sharp:choking",
	});
}

export default Component;
