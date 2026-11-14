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
		"content": `<style>.hqymo8wxy {
  d: path("M10 20.5V16a2 2 0 0 1 4 0v4.5");
}

.pqrrdkbgl {
  d: path("M2.5 20.5V11a9.5 6.5 0 0 1 19 0v9.5Zm0-9.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pqrrdkbgl"/><path class="hqymo8wxy"/></g>`,
		"fallback": "uix-sharp:arena-indoor",
	});
}

export default Component;
