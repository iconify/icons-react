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
		"content": `<style>.bxf3edcfr {
  d: path("M7.5 7v3c2.5 1.5 6.5 1.5 9 0V7M12 14.5v7.25M20.5 5.5V10");
}

.fhwfnpbfn {
  d: path("M12 14.5q-3-1.5-9-.75V21q6-.75 9 .75q3-1.5 9-.75v-7.25q-6-.75-9 .75Zm-8.5-9l8.5-3l8.5 3l-8.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fhwfnpbfn"/><path class="bxf3edcfr"/></g>`,
		"fallback": "uix-sharp:cause-girls-education",
	});
}

export default Component;
