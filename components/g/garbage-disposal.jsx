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
		"content": `<style>.k1kebmbuz {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm3.5-1.5l3 3m0-3l-3 3");
}

.kf0gepbqe {
  d: path("M5.5 3.5h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kf0gepbqe"/><path class="k1kebmbuz"/></g>`,
		"fallback": "uix-sharp:garbage-disposal",
	});
}

export default Component;
