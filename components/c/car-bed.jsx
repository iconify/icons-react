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
		"content": `<style>.i76he_blj {
  d: path("M2.5 16.5v-11A1.5 1.5 0 0 1 4 4h2l3.5 5.5H20a1.5 1.5 0 0 1 1.5 1.5v5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9bx3_bsh {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-12.5-6h19");
}
</style><g class="ulnmmdpxh"><path class="i76he_blj"/><path class="y9bx3_bsh"/></g>`,
		"fallback": "uix-sharp:car-bed",
	});
}

export default Component;
