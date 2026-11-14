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
		"content": `<style>.jq3xg-b1p {
  d: path("M4 2.5h16v15H4Zm5 15v4m6-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1us58bcv {
  d: path("M7.5 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5 0l1.5-1.5");
}
</style><g class="ulnmmdpxh"><path class="jq3xg-b1p"/><path class="y1us58bcv"/></g>`,
		"fallback": "uix-sharp:energy-meter",
	});
}

export default Component;
