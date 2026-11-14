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
		"content": `<style>.l6yd765zn {
  d: path("M12 15c0-1.3-1-2.1-2.5-2c-.1 1.3.9 2.1 2.5 2Zm0-.75c0-1.55 1-2.75 2.5-2.75c.1 1.6-.9 2.8-2.5 2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zxks6m76t {
  d: path("M7 18.5a4 4 0 0 1 0-8a5.5 5.5 0 0 1 11 1a3.5 3.5 0 0 1-1 7Zm5-1.5v-2.75");
}
</style><g class="ulnmmdpxh"><path class="zxks6m76t"/><path class="l6yd765zn"/></g>`,
		"fallback": "uix-sharp:farm-cloud",
	});
}

export default Component;
