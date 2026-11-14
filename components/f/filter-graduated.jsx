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
		"content": `<style>.cxy24so5j {
  d: path("m6.5 17.5l3.5-4l2.5 2.5l2-2l3 3.5");
}

.kouyg8b6l {
  d: path("M3.5 3.5h17v17h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z7evxz9xn {
  fill: currentColor;
  d: path("M3.5 9V6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v3Z");
}
</style><g class="ulnmmdpxh"><path class="kouyg8b6l"/><path class="z7evxz9xn"/><path class="cxy24so5j"/></g>`,
		"fallback": "uix-sharp:filter-graduated",
	});
}

export default Component;
