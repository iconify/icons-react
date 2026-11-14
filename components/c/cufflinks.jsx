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
		"content": `<style>.jizhw_brz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM7 9.75v5M4.25 17.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm9.5-11a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM17 9.75v5m-2.75 2.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}
</style><path class="jizhw_brz"/>`,
		"fallback": "uix-sharp:cufflinks",
	});
}

export default Component;
