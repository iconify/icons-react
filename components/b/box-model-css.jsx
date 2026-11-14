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
		"content": `<style>.ocmla0jdf {
  d: path("M9 9h6v6H9Z");
}

.saz4y0b1r {
  d: path("M3.5 2.5h17a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vpbfyzbrp {
  d: path("M5.75 5.75h12.5v12.5H5.75Z");
}
</style><g class="ulnmmdpxh"><path class="saz4y0b1r"/><path class="vpbfyzbrp"/><path class="ocmla0jdf"/></g>`,
		"fallback": "uix-sharp:box-model-css",
	});
}

export default Component;
