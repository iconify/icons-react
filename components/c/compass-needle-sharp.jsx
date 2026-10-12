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
		"content": `<style>.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w_m9cmb5v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.67 4.67l-4.59 9.41l-.33.67l-.53-.53l-4.44-4.44l-.53-.53l.67-.33l9.41-4.59L20 4z");
}

.ytnva043v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.78 9.78l4.44 4.44l.53.53l-.67.33l-9.41 4.59L4 20l.33-.67l4.59-9.41l.33-.67z");
}
</style><g class="ux2u0rbkq"><path class="w_m9cmb5v"/><path class="ytnva043v"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:compass-needle-sharp",
	});
}

export default Component;
