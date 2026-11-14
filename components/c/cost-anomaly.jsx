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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wc23aqbga {
  d: path("M3.5 3v17.5H13");
}

.wj8369b2t {
  d: path("m7 16l3-2.5L12.5 5l2.5 7.5l.25-.214m.38-.326L18.5 9.5m-.5 5.25v3.5M18 21h.01");
}
</style><g class="ulnmmdpxh"><path class="wc23aqbga"/><path class="wj8369b2t"/></g>`,
		"fallback": "uix-sharp:cost-anomaly",
	});
}

export default Component;
