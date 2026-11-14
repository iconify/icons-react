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
		"content": `<style>.dcox06bxm {
  fill: currentColor;
  d: path("M5 3.5h7.25v5H5Zm7.25 5h7.25v5h-7.25Z");
}

.q6box_btg {
  d: path("M5 2.5v19m0-18h14.5v10H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q6box_btg"/><path class="dcox06bxm"/></g>`,
		"fallback": "uix-sharp:finish-line-flag",
	});
}

export default Component;
