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
		"content": `<style>.z-bjdh31u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13 7.5l.568.994a1.5 1.5 0 0 0 1.302.756H16a1.16 1.16 0 0 1 1.008 1.736l-.583 1.02a1.5 1.5 0 0 0 0 1.488l.583 1.02A1.16 1.16 0 0 1 16 16.25h-1.13a1.5 1.5 0 0 0-1.302.756L13 18a1.152 1.152 0 0 1-2 0l-.568-.994a1.5 1.5 0 0 0-1.302-.756H8a1.16 1.16 0 0 1-1.008-1.736l.583-1.02a1.5 1.5 0 0 0 0-1.488l-.583-1.02A1.16 1.16 0 0 1 8 9.25h1.13a1.5 1.5 0 0 0 1.302-.756L11 7.5a1.152 1.152 0 0 1 2 0m-2.5-4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M12 5v1.5M10.75 22L12 19l1.25 3");
}
</style><path class="z-bjdh31u"/>`,
		"fallback": "uix:diwali-lantern",
	});
}

export default Component;
