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
		"content": `<style>.j_sernfgs {
  d: path("m16 7l2 2l2-2");
}

.ksxk4ttto {
  d: path("M4 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2.5 17c0-3.25 2-5.25 4.5-5.25s4.5 2 4.5 5.25m3-3.5a3.5 1.75 0 1 0 7 0a3.5 1.75 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj8hgmbzi {
  d: path("M14.5 13.5V19a3.5 1.75 0 0 0 7 0v-5.5M13 5h5v4");
}
</style><g class="ulnmmdpxh"><path class="ksxk4ttto"/><path class="wj8hgmbzi"/><path class="j_sernfgs"/></g>`,
		"fallback": "uix-sharp:employee-contribution",
	});
}

export default Component;
