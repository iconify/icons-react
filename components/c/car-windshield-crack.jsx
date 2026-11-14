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
		"content": `<style>.al3c9pocs {
  d: path("M4 18L7 6h10l3 12Z");
}

.qyyk4hkuw {
  d: path("m12 6l-1 4l2.5 2.5L12 18m-1-8l-3 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="al3c9pocs"/><path class="qyyk4hkuw"/></g>`,
		"fallback": "uix-sharp:car-windshield-crack",
	});
}

export default Component;
