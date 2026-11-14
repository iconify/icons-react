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
		"content": `<style>.j48grnb1t {
  d: path("M5.5 14.5v-5a6.5 6.5 0 0 1 13 0v5Zm6.5 0V21m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vo50nz0js {
  d: path("M10 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="j48grnb1t"/><path class="vo50nz0js"/></g>`,
		"fallback": "uix-sharp:dwarf-signal",
	});
}

export default Component;
