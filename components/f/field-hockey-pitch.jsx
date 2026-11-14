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
		"content": `<style>.ctxb9ubwr {
  d: path("M2.5 5h19v14h-19ZM12 5v14");
}

.u1glw9rof {
  d: path("M2.5 8H4a4 4 0 0 1 0 8H2.5m19-8H20a4 4 0 0 0 0 8h1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ctxb9ubwr"/><path class="u1glw9rof"/></g>`,
		"fallback": "uix-sharp:field-hockey-pitch",
	});
}

export default Component;
