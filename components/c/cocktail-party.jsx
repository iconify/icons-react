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

.l5wez7y9l {
  d: path("M11.25 7.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.ld2r2vc3u {
  d: path("M7.621 4.5h8.758a1.5 1.5 0 0 1 1.06 2.561l-4.378 4.378a1.5 1.5 0 0 1-2.122 0L6.561 7.061A1.5 1.5 0 0 1 7.621 4.5m4.379 8v8m-4 0h8M17.5 2l-4.25 4.75");
}
</style><g class="hntgybcog"><path class="ld2r2vc3u"/><path class="l5wez7y9l"/></g>`,
		"fallback": "uix:cocktail-party",
	});
}

export default Component;
