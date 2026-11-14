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
		"content": `<style>.e6t-hvbqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5v-17a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17m-17.5 0h19M12 2.5v19m-2.75-11v3m5.5-3v3");
}
</style><path class="e6t-hvbqv"/>`,
		"fallback": "uix-sharp:double-door",
	});
}

export default Component;
