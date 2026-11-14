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
		"content": `<style>.do982wb5c {
  d: path("M2.5 6.5h13v15h-13Z");
}

.mo4qhm9_b {
  d: path("M8.5 6.5v-3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-5M9 6.5v15M2.5 14h13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="do982wb5c"/><path class="mo4qhm9_b"/></g>`,
		"fallback": "uix-sharp:double-glazing",
	});
}

export default Component;
