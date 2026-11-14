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
		"content": `<style>.tovqy8boy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.75-5.5L20 11M6.25 10L20 4.5M3.766 18.967l1.25-2.5a1.75 1.75 0 0 1 1.566-.967h12.086a1.75 1.75 0 0 1 1.566 2.533l-1.25 2.5a1.75 1.75 0 0 1-1.566.967H5.332a1.75 1.75 0 0 1-1.566-2.533");
}
</style><path class="tovqy8boy"/>`,
		"fallback": "uix:cutting-table",
	});
}

export default Component;
