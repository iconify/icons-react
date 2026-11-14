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
		"content": `<style>.evszzabph {
  d: path("M4 2.5v19M4 14h16m0-11.5v19M8.25 7.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ka69rlo2l {
  d: path("M8.75 9.25q3.25-2.25 6.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="evszzabph"/><path class="ka69rlo2l"/></g>`,
		"fallback": "uix-sharp:gaelic-football",
	});
}

export default Component;
