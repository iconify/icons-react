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
		"content": `<style>.k04vctbvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 21.5l-5.75-8a7 7 0 1 1 11.5 0Zm0-16v4m0 3.25h.01");
}
</style><path class="k04vctbvh"/>`,
		"fallback": "uix-sharp:incident-pin",
	});
}

export default Component;
