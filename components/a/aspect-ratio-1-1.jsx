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
		"content": `<style>.kouyg8b6l {
  d: path("M3.5 3.5h17v17h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z4jyuzbfs {
  d: path("M7 10V7h3m7 7v3h-3");
}
</style><g class="ulnmmdpxh"><path class="kouyg8b6l"/><path class="z4jyuzbfs"/></g>`,
		"fallback": "uix-sharp:aspect-ratio-1-1",
	});
}

export default Component;
