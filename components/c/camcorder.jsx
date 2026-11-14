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
		"content": `<style>.bpa337hfc {
  d: path("M2.5 8h13v11h-13Zm13 1.5h6v8h-6ZM4 3.5h6.5V8H4Z");
}

.mmolbzb2v {
  d: path("M7 13.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bpa337hfc"/><path class="mmolbzb2v"/></g>`,
		"fallback": "uix-sharp:camcorder",
	});
}

export default Component;
