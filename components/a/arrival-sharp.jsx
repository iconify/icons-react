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
		"content": `<style>.hcq9oqlkj {
  d: path("m18.25 11l-3.5 3.5m0-3.25v3.25H18");
}

.qggueptlo {
  d: path("M7.5 5.25v-2.5m9 2.5v-2.5M2.75 5.25h18.5v13.5H2.75zM6 9.5h5.5m-5.5 5h5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qggueptlo"/><path class="hcq9oqlkj"/></g>`,
		"fallback": "iconoven:arrival-sharp",
	});
}

export default Component;
