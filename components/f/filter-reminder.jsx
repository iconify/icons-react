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
		"content": `<style>.d3_jxlben {
  d: path("M11.1 19.5H2.5v-17h17v9.1M7 6.5v9m4-9v9m4-9v6");
}

.s_7mp1bba {
  d: path("M14.5 20c1-1 1-2 1-3a2.75 2.75 0 0 1 5.5 0c0 1 0 2 1 3Zm2.75 2h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d3_jxlben"/><path class="s_7mp1bba"/></g>`,
		"fallback": "uix-sharp:filter-reminder",
	});
}

export default Component;
