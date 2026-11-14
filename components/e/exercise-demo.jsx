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
		"content": `<style>.fidx3ubfh {
  d: path("m9.25 6.25l7 3.75l-7 3.75ZM10 16.5l-1 4h6l-1-4");
}

.hq-h8uxcp {
  d: path("M2.5 3.5h19v13h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hq-h8uxcp"/><path class="fidx3ubfh"/></g>`,
		"fallback": "uix-sharp:exercise-demo",
	});
}

export default Component;
