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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.l4-h525ex {
  fill: var(--svg-color--e6eefa, #e6eefa);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.z5elyptsq {
  fill: var(--svg-color--fff, #fff);
  d: path("M13.684 8.924c0-2.297-1.1-4.273-1.937-4.916c-.004-.002-.064-.037-.059.055l-.001.003c-.07 4.436-2.298 5.638-3.522 7.257c-2.827 3.737-.198 7.834 2.479 8.592c1.497.424-.346-.75-.584-3.228c-.287-2.996 3.624-5.283 3.624-7.763m1.46 1.402c-.017-.011-.041-.02-.058.009c-.046.564-.604 1.772-1.312 2.881c-2.4 3.762-1.032 5.576-.263 6.55c.447.565 0 0 1.116-.578c.088-.046 2.178-1.256 2.404-4.016c.22-2.672-1.334-4.356-1.887-4.846");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="l4-h525ex"/><path class="z5elyptsq"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ht-background",
	});
}

export default Component;
