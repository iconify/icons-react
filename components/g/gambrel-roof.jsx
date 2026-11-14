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
		"content": `<style>.of9ovze_b {
  d: path("M9 20.5v-6h6v6m-6-6l6 6m0-6l-6 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w52n4lylb {
  d: path("M3.5 20.5V11l3-5L12 3.5L17.5 6l3 5v9.5Z");
}
</style><g class="ulnmmdpxh"><path class="w52n4lylb"/><path class="of9ovze_b"/></g>`,
		"fallback": "uix-sharp:gambrel-roof",
	});
}

export default Component;
