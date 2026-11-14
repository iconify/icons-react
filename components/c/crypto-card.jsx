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
		"content": `<style>.fda0jacte {
  d: path("M14 14.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ubazlinms {
  d: path("M2.5 5h19v14h-19Zm0 4.5h19M6 15h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ubazlinms"/><path class="fda0jacte"/></g>`,
		"fallback": "uix-sharp:crypto-card",
	});
}

export default Component;
