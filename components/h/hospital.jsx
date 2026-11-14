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
		"content": `<style>.g66eevb7k {
  d: path("M4.5 4.5h15V21h-15ZM2.5 21h19M12 8.5v5M9.5 11h5");
}

.sq-0v8bvq {
  d: path("M10.5 21v-3.5h3V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g66eevb7k"/><path class="sq-0v8bvq"/></g>`,
		"fallback": "uix-sharp:hospital",
	});
}

export default Component;
