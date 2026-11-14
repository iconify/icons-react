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
		"content": `<style>.c9k2ngkio {
  d: path("M4 2.5L10 5v14l-6 2.5Zm9 9.5h8m-3.5-3.5L21 12l-3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xcmjvmbet {
  d: path("M14 7.5v-5H4v19h10v-5");
}
</style><g class="ulnmmdpxh"><path class="xcmjvmbet"/><path class="c9k2ngkio"/></g>`,
		"fallback": "uix-sharp:exit-door-sign",
	});
}

export default Component;
