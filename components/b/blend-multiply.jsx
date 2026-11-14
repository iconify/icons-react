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
		"content": `<style>.c67boeflq {
  d: path("M10.75 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.hqcivclxp {
  d: path("M6.25 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="hqcivclxp"/><path class="c67boeflq"/></g>`,
		"fallback": "uix-sharp:blend-multiply",
	});
}

export default Component;
