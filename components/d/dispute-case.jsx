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
		"content": `<style>.zalvvmlho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.909 3.02l7.071 7.071l-3.889 3.889L9.02 6.909ZM12.5 10.5L4 19m6.5-2.25h11v3h-11Z");
}
</style><path class="zalvvmlho"/>`,
		"fallback": "uix-sharp:dispute-case",
	});
}

export default Component;
