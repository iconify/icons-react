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
		"content": `<style>.gc40fjwbk {
  d: path("M2.5 5a4 1.75 0 1 0 8 0a4 1.75 0 1 0-8 0Z");
}

.o5v09ccth {
  d: path("M13.5 5v8a4 1.75 0 0 0 8 0V5M4 19.5h16m-14-2l-2 2l2 2m12-4l2 2l-2 2");
}

.ps5al2r6a {
  d: path("M2.5 5v8a4 1.75 0 0 0 8 0V5m3 0a4 1.75 0 1 0 8 0a4 1.75 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gc40fjwbk"/><path class="ps5al2r6a"/><path class="o5v09ccth"/></g>`,
		"fallback": "uix-sharp:database-compare",
	});
}

export default Component;
