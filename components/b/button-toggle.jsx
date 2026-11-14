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
		"content": `<style>.em4j34a7u {
  d: path("M2.5 6h19v12h-19Z");
}

.o1ugfdctv {
  d: path("M6.25 9h5.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm3.5 3h.01m5.74 0h3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="o1ugfdctv"/></g>`,
		"fallback": "uix-sharp:button-toggle",
	});
}

export default Component;
