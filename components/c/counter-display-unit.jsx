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
		"content": `<style>.kph67ubbs {
  d: path("M7 16.5V10h3v6.5m4 0V10h3v6.5");
}

.sfk_huiqm {
  d: path("M4.5 13.5V4A1.5 1.5 0 0 1 6 2.5h12A1.5 1.5 0 0 1 19.5 4v9.5m-17 0l4 3h11l4-3v8h-19ZM8 5.75h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sfk_huiqm"/><path class="kph67ubbs"/></g>`,
		"fallback": "uix-sharp:counter-display-unit",
	});
}

export default Component;
