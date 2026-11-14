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
		"content": `<style>.c16w6-hiw {
  d: path("m7 10l3 3l5.5-5.5");
}

.ng2yg-b7d {
  d: path("M3.25 3.5h17.5v13H3.25Zm11.25 13v5l1.75-1.25L18 21.5v-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ng2yg-b7d"/><path class="c16w6-hiw"/></g>`,
		"fallback": "uix-sharp:completion-certificate",
	});
}

export default Component;
