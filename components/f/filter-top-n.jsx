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
		"content": `<style>.gnm__dr0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.732 19.366L8 17.5V11L2.5 3.5h15L12 11v4.499m2.5 6.001v-3.25h2.25v-3.5h2.5V17h2.25v4.5Z");
}
</style><path class="gnm__dr0b"/>`,
		"fallback": "uix-sharp:filter-top-n",
	});
}

export default Component;
