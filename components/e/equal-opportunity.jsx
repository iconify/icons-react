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
		"content": `<style>.kozp34j-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19m6-19v19m5-19v19m6-19v19M3.5 7h6m-6 5h6m-6 5h6m5-10h6m-6 5h6m-6 5h6");
}
</style><path class="kozp34j-a"/>`,
		"fallback": "uix-sharp:equal-opportunity",
	});
}

export default Component;
