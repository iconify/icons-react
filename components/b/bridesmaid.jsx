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
		"content": `<style>.cxmd3fufi {
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.gbqjzgizl {
  d: path("M9.25 11.25L12 15l2.75-3.75M12 15l-1.5 6m1.5-6l1.5 6M12 15l-3.5-1.5V17Zm0 0l3.5-1.5V17Z");
}

.scvgktb8j {
  d: path("M4.25 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm9.5 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cxmd3fufi"/><path class="scvgktb8j"/><path class="gbqjzgizl"/></g>`,
		"fallback": "uix-sharp:bridesmaid",
	});
}

export default Component;
