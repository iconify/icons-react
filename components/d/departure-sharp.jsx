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
		"content": `<style>.ikajfxx8f {
  d: path("m14.75 15l3.5-3.5M15 11.25h3.25v3.25");
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
</style><g class="x2cwu0gfd"><path class="qggueptlo"/><path class="ikajfxx8f"/></g>`,
		"fallback": "iconoven:departure-sharp",
	});
}

export default Component;
