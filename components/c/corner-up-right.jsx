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
		"content": `<style>.qq_8n4bqv {
  d: path("M4.5 19.5V13A3.5 3.5 0 0 1 8 9.5h11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yanhvrmwg {
  d: path("m14.5 4.5l5 5l-5 5");
}
</style><g class="ulnmmdpxh"><path class="qq_8n4bqv"/><path class="yanhvrmwg"/></g>`,
		"fallback": "uix-sharp:corner-up-right",
	});
}

export default Component;
