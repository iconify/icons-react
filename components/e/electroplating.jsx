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
		"content": `<style>.ofce97bmf {
  d: path("M10.25 11h3.5v4.5h-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wn3na7bsy {
  d: path("M3.5 6v13A2.5 2.5 0 0 0 6 21.5h12a2.5 2.5 0 0 0 2.5-2.5V6m-17 3.5h17M6.75 3v14.5M17.25 3v14.5M12 3v8");
}
</style><g class="ulnmmdpxh"><path class="wn3na7bsy"/><path class="ofce97bmf"/></g>`,
		"fallback": "uix-sharp:electroplating",
	});
}

export default Component;
