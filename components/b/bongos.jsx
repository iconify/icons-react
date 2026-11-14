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
		"content": `<style>.g3eksabhy {
  d: path("m14 9.5l1.25 9h4.5l1.25-9m-11.25 3h4.75");
}

.s1z9xvbrn {
  d: path("M2.5 7a4 1.75 0 1 0 8 0a4 1.75 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xi8psebxu {
  d: path("M2.5 7L4 18.5h5L10.5 7M14 9.5a3.5 1.75 0 1 0 7 0a3.5 1.75 0 1 0-7 0Z");
}
</style><g class="ulnmmdpxh"><path class="s1z9xvbrn"/><path class="xi8psebxu"/><path class="g3eksabhy"/></g>`,
		"fallback": "uix-sharp:bongos",
	});
}

export default Component;
