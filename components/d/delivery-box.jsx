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
		"content": `<style>.gvvcj9bop {
  d: path("m3.5 7l8.5 4.5L20.5 7M12 11.5v10M7.75 4.75l8.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyk2jgbrd {
  d: path("M12 2.5L20.5 7v10L12 21.5L3.5 17V7Z");
}
</style><g class="ulnmmdpxh"><path class="vyk2jgbrd"/><path class="gvvcj9bop"/></g>`,
		"fallback": "uix-sharp:delivery-box",
	});
}

export default Component;
