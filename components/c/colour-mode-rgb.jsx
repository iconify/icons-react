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
		"content": `<style>.gjo4n6j4d {
  d: path("M4.75 9h3v3h-3Zm5.75 0h3v3h-3Zm5.75 0h3v3h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zo8kfr3hy {
  d: path("M2 4h20v13H2Zm10 13v3.5m-4 0h8");
}
</style><g class="ulnmmdpxh"><path class="zo8kfr3hy"/><path class="gjo4n6j4d"/></g>`,
		"fallback": "uix-sharp:colour-mode-rgb",
	});
}

export default Component;
