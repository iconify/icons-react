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
		"content": `<style>.etwnqi58a {
  d: path("M7 8.5h10v7H7Zm1-6v3m4-3v3m4-3v3m-8 13v3m4-3v3m4-3v3");
}

.rhqzuob8o {
  d: path("M4 5.5h16v13H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rhqzuob8o"/><path class="etwnqi58a"/></g>`,
		"fallback": "uix-sharp:camera-sensor",
	});
}

export default Component;
