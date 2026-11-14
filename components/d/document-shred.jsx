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
		"content": `<style>.uoz0dxqzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h19v6h-19Zm4 0V2.5h11V9M7 18v3.5m5-3.5v3.5m5-3.5v3.5");
}
</style><path class="uoz0dxqzp"/>`,
		"fallback": "uix-sharp:document-shred",
	});
}

export default Component;
