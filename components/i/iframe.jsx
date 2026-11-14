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
		"content": `<style>.f-r8xnw6x {
  d: path("M6 10h12v8.5H6Zm0 2.75h12");
}

.nfl06b7ml {
  d: path("M2.5 2.5h19v19h-19Zm0 4.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nfl06b7ml"/><path class="f-r8xnw6x"/></g>`,
		"fallback": "uix-sharp:iframe",
	});
}

export default Component;
