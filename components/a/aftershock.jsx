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
		"content": `<style>.k9mdgcc-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12H5m0 0l2-9l2.5 18l2-13l2 8l2-6l2 4l2-2h2");
}
</style><path class="k9mdgcc-a"/>`,
		"fallback": "uix-sharp:aftershock",
	});
}

export default Component;
