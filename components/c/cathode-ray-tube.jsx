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
		"content": `<style>.xmot0rbhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h10v13H3Zm10 2l5.5 3.5H21v3h-2.5L13 15m-5 2v3.5m-3 0h6");
}
</style><path class="xmot0rbhn"/>`,
		"fallback": "uix-sharp:cathode-ray-tube",
	});
}

export default Component;
