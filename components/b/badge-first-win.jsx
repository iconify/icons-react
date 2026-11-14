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
		"content": `<style>.tr_6_4bqp {
  d: path("m12 2l1.553 1.204l1.947-.266l.743 1.819l1.819.743l-.266 1.947L19 9l-1.204 1.553l.266 1.947l-1.819.743l-.743 1.819l-1.947-.266L12 16l-1.553-1.204l-1.947.266l-.743-1.819l-1.819-.743l.266-1.947L5 9l1.204-1.553L5.938 5.5l1.819-.743l.743-1.819l1.947.266Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uo2jyzbgk {
  d: path("M8.5 14L7 21l5-2.5l5 2.5l-1.5-7M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="tr_6_4bqp"/><path class="uo2jyzbgk"/></g>`,
		"fallback": "uix-sharp:badge-first-win",
	});
}

export default Component;
