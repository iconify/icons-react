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
		"content": `<style>.gvfoz9bkp {
  d: path("M4.5 9.5a7.5 7 0 0 1 15 0");
}

.lvyw4tbbf {
  d: path("M2.5 9h4v6h-4Zm15 3.2V9h4v5.2M15 21.5v-3m3 3V15m3 6.5V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gvfoz9bkp"/><path class="lvyw4tbbf"/></g>`,
		"fallback": "uix-sharp:audiometer",
	});
}

export default Component;
