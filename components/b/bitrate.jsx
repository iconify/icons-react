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
		"content": `<style>.l5pby-bdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5h6m-6 5h11m-11 5h17.5m-3-3.25l3.25 3.25l-3.25 3.25");
}
</style><path class="l5pby-bdz"/>`,
		"fallback": "uix-sharp:bitrate",
	});
}

export default Component;
