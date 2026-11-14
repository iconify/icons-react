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
		"content": `<style>.d3zg4wa2e {
  d: path("M2.5 4.5h19v15h-19Zm4 0v15m11-15v15M9.25 12h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uztqqg1zk {
  d: path("M11 10.25L9.25 12L11 13.75m2-3.5L14.75 12L13 13.75");
}
</style><g class="ulnmmdpxh"><path class="d3zg4wa2e"/><path class="uztqqg1zk"/></g>`,
		"fallback": "uix-sharp:flexbox",
	});
}

export default Component;
