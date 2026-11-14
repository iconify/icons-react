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
		"content": `<style>.e8mvxtb2l {
  d: path("M3 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ynbz27bzu {
  d: path("M6 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm10.5-5.25a9.25 9.25 0 0 1 0 10.5m3.25-11.5a12.5 12.5 0 0 1 0 12.5");
}
</style><g class="ulnmmdpxh"><path class="e8mvxtb2l"/><path class="ynbz27bzu"/></g>`,
		"fallback": "uix-sharp:buzzer",
	});
}

export default Component;
