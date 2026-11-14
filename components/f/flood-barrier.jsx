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
		"content": `<style>.j_oy4hbjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4.5v19H10Zm-7.5 10q2-1.5 3.75 0t3.75 0M2.5 17q2-1.5 3.75 0T10 17m4.5 2q1.75-1.5 3.5 0t3.5 0");
}
</style><path class="j_oy4hbjp"/>`,
		"fallback": "uix-sharp:flood-barrier",
	});
}

export default Component;
