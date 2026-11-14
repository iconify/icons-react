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
		"content": `<style>.cllub2yjr {
  d: path("M3 11a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m9 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.twkdnqbru {
  d: path("M6.5 11H10l3.5-6l2 6M10 11L8.75 5m-1.5 0h3m3.25 0L13 3.5h2.5M14.75 18l2 2L21 15.75");
}
</style><g class="hntgybcog"><path class="cllub2yjr"/><path class="twkdnqbru"/></g>`,
		"fallback": "uix:bikes-available",
	});
}

export default Component;
