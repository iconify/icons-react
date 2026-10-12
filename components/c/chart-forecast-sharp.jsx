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
		"content": `<style>.e33y3ef2i {
  d: path("m7.25 16.25l3.5-4l2.5 2m1-1.15l1.25-1.5m1-1.15l1.25-1.5m1-1.2L20 6.25");
}

.vf_31rbpy {
  d: path("M3.75 3.75v16.5h16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vf_31rbpy"/><path class="e33y3ef2i"/></g>`,
		"fallback": "iconoven:chart-forecast-sharp",
	});
}

export default Component;
