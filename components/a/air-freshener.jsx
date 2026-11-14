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
		"content": `<style>.pd2qfkb1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8h8v13H4Zm2 0V5h4v3m4-2h.01M17 4h.01M17 8h.01M20 6h.01");
}
</style><path class="pd2qfkb1j"/>`,
		"fallback": "uix-sharp:air-freshener",
	});
}

export default Component;
