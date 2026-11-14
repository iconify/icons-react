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

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnzf44b0e {
  d: path("M7.75 9.75H7a2.25 2.25 0 0 0 0 4.5h.75m2.5-4.5H11a2.25 2.25 0 0 1 0 4.5h-.75M7.75 12h2.5m5.25 0h3");
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="vnzf44b0e"/></g>`,
		"fallback": "uix-sharp:input-url",
	});
}

export default Component;
