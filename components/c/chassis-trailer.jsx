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
		"content": `<style>.bumxbvbam {
  d: path("M2.5 9.5h19V14h-19Zm2-3.5v3.5m15-3.5v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.voo1u2nny {
  d: path("M2.5 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="bumxbvbam"/><path class="voo1u2nny"/></g>`,
		"fallback": "uix-sharp:chassis-trailer",
	});
}

export default Component;
