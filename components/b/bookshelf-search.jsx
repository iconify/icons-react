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
		"content": `<style>.b0co6i0rb {
  d: path("M13.4 20.5H2.5v-18h17v10.4m-17-1.4h17M6 5.5v6m2.75-6v6m3-5.5l2.75 5.5");
}

.g-56du9fb {
  d: path("M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b0co6i0rb"/><path class="g-56du9fb"/></g>`,
		"fallback": "uix-sharp:bookshelf-search",
	});
}

export default Component;
