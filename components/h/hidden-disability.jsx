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
		"content": `<style>.lyykrhemu {
  d: path("M10.5 16a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.p_gvapbwd {
  d: path("M16 16a2 2 0 0 1-2 3.5a2 2 0 0 1-4 0A2 2 0 0 1 8 16a2 2 0 0 1 2-3.5a2 2 0 0 1 4 0a2 2 0 0 1 2 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4rq56bwb {
  d: path("m6.5 2.5l5.5 8l5.5-8");
}
</style><g class="ulnmmdpxh"><path class="y4rq56bwb"/><path class="p_gvapbwd"/><path class="lyykrhemu"/></g>`,
		"fallback": "uix-sharp:hidden-disability",
	});
}

export default Component;
