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
		"content": `<style>.fukojcb5q {
  d: path("M3 4h17.5m-13 0v3.5m9-3.5v3.5m-13 0h17v13h-17Z");
}

.qwu0bsbls {
  d: path("M8 12.5h7v2a3.5 3.5 0 0 1-7 0Zm7 1a1.75 1.75 0 0 1 0 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fukojcb5q"/><path class="qwu0bsbls"/></g>`,
		"fallback": "uix-sharp:cafe-sign",
	});
}

export default Component;
