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
		"content": `<style>.cokkw2b6a {
  d: path("M3.5 19V9c0-1.5 1-2.5 2.5-2.5h12c1.5 0 2.5 1 2.5 2.5v10Z");
}

.igdxgerhu {
  d: path("M6 8.75h12l-.75 3.75H6.75Zm-.25 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm10.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM12 14.25v3.25m-1.5-1.75h3");
}

.oola70yhr {
  fill: currentColor;
  d: path("M4.5 19h3v2.5h-3Zm12 0h3v2.5h-3Z");
}

.qsd-g4bcd {
  fill: currentColor;
  d: path("M9.5 3h5v2.5h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cokkw2b6a"/><path class="qsd-g4bcd"/><path class="igdxgerhu"/><path class="oola70yhr"/></g>`,
		"fallback": "uix-sharp:ambulance",
	});
}

export default Component;
