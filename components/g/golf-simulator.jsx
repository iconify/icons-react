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
		"content": `<style>.hc13241cn {
  d: path("m15 6l3.5 1.75L15 9.5Z");
}

.s3_-g4bjz {
  d: path("M11 2.5h10.5v15H11Zm-8 4a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2.5 5.25V16M3 21.5L5.5 16L8 21.5M15 6v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s3_-g4bjz"/><path class="hc13241cn"/></g>`,
		"fallback": "uix-sharp:golf-simulator",
	});
}

export default Component;
