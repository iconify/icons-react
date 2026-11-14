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
		"content": `<style>.jzeijzd4h {
  d: path("M15 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5 0h.01");
}

.olt8kmb1r {
  d: path("M2.5 14h5v7.5h-5ZM5 14c0-7 4.5-10 8.25-5.5m0 2.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="olt8kmb1r"/><path class="jzeijzd4h"/></g>`,
		"fallback": "uix-sharp:endoscope",
	});
}

export default Component;
