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
		"content": `<style>.xfkmpacjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h13v9H3Zm13 1.5h5v6h-5ZM5 7V4h5v3m-2.5 9v4.5H12V16");
}
</style><path class="xfkmpacjt"/>`,
		"fallback": "uix-sharp:handheld-camera",
	});
}

export default Component;
