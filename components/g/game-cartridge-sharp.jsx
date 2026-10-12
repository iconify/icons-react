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
		"content": `<style>.t0_v1lbos {
  d: path("M7.5 5.25h9v8h-9zm1.25 11.5v2m2.5-2v2m2.5-2v2m2.5-2v1");
}

.tzhv0pb_y {
  d: path("M6.25 2.75H19V19l-.77.99l-.21.27l-.77.99H6.75l-.77-.99l-.21-.27L5 19V2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tzhv0pb_y"/><path class="t0_v1lbos"/></g>`,
		"fallback": "iconoven:game-cartridge-sharp",
	});
}

export default Component;
