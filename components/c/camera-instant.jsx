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
		"content": `<style>.b1wrq7q0c {
  d: path("M9 8.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm8-3h.01M5.5 19h13");
}

.dn9ldzb0r {
  d: path("M3 2.5h18V15H3ZM5.5 15v7h13v-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dn9ldzb0r"/><path class="b1wrq7q0c"/></g>`,
		"fallback": "uix-sharp:camera-instant",
	});
}

export default Component;
