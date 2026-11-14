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
		"content": `<style>.fdau0149r {
  d: path("M4 5.5c7.5 0 12 5 12 13.5");
}

.koyj9mdsb {
  d: path("M12.5 15.5L16 19l3.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fdau0149r"/><path class="koyj9mdsb"/></g>`,
		"fallback": "uix-sharp:arrow-curve-down",
	});
}

export default Component;
