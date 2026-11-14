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
		"content": `<style>.b3x1yvboz {
  d: path("M18 14.5q.5 3 3.5 3.5q-3 .5-3.5 3.5q-.5-3-3.5-3.5q3-.5 3.5-3.5Z");
}

.biyn5obyd {
  d: path("M15.1 21.5H4.5v-19h15V14M8 6.5h8m-8 4h8m-8 4h1.75m2.75 0H14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="biyn5obyd"/><path class="b3x1yvboz"/></g>`,
		"fallback": "uix-sharp:ai-autocomplete",
	});
}

export default Component;
