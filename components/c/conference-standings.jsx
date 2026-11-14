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
		"content": `<style>.bm5ffkzfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18v16H3Zm0 5h18M3 14.5h18M9 4v16");
}
</style><path class="bm5ffkzfz"/>`,
		"fallback": "uix-sharp:conference-standings",
	});
}

export default Component;
