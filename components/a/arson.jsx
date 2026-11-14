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
		"content": `<style>.az58d2bxv {
  d: path("M6.5 18.5V14h4v4.5m7.75 3.5c-2 0-3.25-1.5-3.25-3.25c0-1.5.75-2.5 1.25-3.5c.75.75 1 1.25 1 2.25c.75-1.25 1.25-2.5 1-3.75c2 1.25 3.25 3.25 3.25 5S20.25 22 18.25 22Z");
}

.oyr08_39e {
  d: path("M12.2 18.5H2.5v-10l8-6l8 6v2.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oyr08_39e"/><path class="az58d2bxv"/></g>`,
		"fallback": "uix-sharp:arson",
	});
}

export default Component;
