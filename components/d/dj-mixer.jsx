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
		"content": `<style>.vf05znp3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15ZM9 6h.01M15 6h.01M9 9.5v9m6-9v9M7.5 13h3m3 3h3");
}
</style><path class="vf05znp3s"/>`,
		"fallback": "uix-sharp:dj-mixer",
	});
}

export default Component;
