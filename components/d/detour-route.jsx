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
		"content": `<style>.cpjucyb5e {
  d: path("M18.75 12.25L21.5 15l-2.75 2.75");
}

.q6mx6p8ck {
  d: path("M2.5 15H6c2 0 2-9 6-9s4 9 6 9h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q6mx6p8ck"/><path class="cpjucyb5e"/></g>`,
		"fallback": "uix-sharp:detour-route",
	});
}

export default Component;
