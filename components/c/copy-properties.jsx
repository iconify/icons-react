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
		"content": `<style>.ob_ul2boi {
  d: path("M8.5 2.5h7v3h-7ZM12 10l3.5 3.5L12 17l-3.5-3.5Z");
}

.qpofv-b0o {
  d: path("M4.5 4h15v17.5h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qpofv-b0o"/><path class="ob_ul2boi"/></g>`,
		"fallback": "uix-sharp:copy-properties",
	});
}

export default Component;
