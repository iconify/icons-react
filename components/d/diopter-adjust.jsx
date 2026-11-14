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
		"content": `<style>.k89uv2bcl {
  d: path("M8.711 7.553a3.5 3.5 0 0 1 2.092-2.092M3 19.5h9m4 0h5m-8.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.pnz9d-m6o {
  d: path("M5.75 8.75a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pnz9d-m6o"/><path class="k89uv2bcl"/></g>`,
		"fallback": "uix-sharp:diopter-adjust",
	});
}

export default Component;
