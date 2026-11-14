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
		"content": `<style>.uj0gb-bgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17.5h13V21H3Zm4 0q2.5-4 5 0m-2.5-2L19.5 3");
}
</style><path class="uj0gb-bgz"/>`,
		"fallback": "uix-sharp:flat-mop",
	});
}

export default Component;
