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
		"content": `<style>.fwgc4z0nd {
  d: path("M13.75 7.75h5V11h-5ZM5.5 15.5h1.25m5.75 0h1.25m2.75 0h1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8sm46qhb {
  d: path("M2.5 5h19v14h-19Zm3 4.5h1.25m2.75 0h1.25");
}
</style><g class="ulnmmdpxh"><path class="y8sm46qhb"/><path class="fwgc4z0nd"/></g>`,
		"fallback": "uix-sharp:cheque-blank",
	});
}

export default Component;
