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
		"content": `<style>.ch2z-fmmj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.77 8.46l1.77 1.77l.53.53l-.53.53L12 14.83l-.53.53l-.7.26l-1.43.54l-.7.26l-.53-.53l-.53-.53l.26-.7l.54-1.43l.26-.7l.53-.53l3.54-3.54l.53-.53z");
}

.ey1hik3eo {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.99 18.01H6");
}

.o2ws7abph {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.65 5.11l4.24 4.24l.71.71l-.71.7l-.7.71l-.71.71l-.71-.71l-4.24-4.24l-.71-.71l.71-.71l.71-.7l.7-.71z");
}

.ttm1v75cz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.24 4.58l.71-.71l1.06-1.06l1.06 1.06l1.06 1.06l1.06 1.06l-1.06 1.06l-.71.71l-1.06 1.06l-1.06-1.06l-1.06-1.06l-1.06-1.06z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ttm1v75cz"/><path class="o2ws7abph"/><path class="ch2z-fmmj"/><path class="ey1hik3eo"/></g>`,
		"fallback": "iconoven:dropper-sharp",
	});
}

export default Component;
