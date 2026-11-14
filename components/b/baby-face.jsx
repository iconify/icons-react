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
		"content": `<style>.pjbbv2bym {
  d: path("M12 5c-1-2 1.75-3 2.25-1.25M9 12.5h.01m5.99 0h.01M10 17q2 1.75 4 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgq2vpjgt {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}
</style><g class="ulnmmdpxh"><path class="wgq2vpjgt"/><path class="pjbbv2bym"/></g>`,
		"fallback": "uix-sharp:baby-face",
	});
}

export default Component;
