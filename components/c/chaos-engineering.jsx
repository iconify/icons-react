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
		"content": `<style>.i_h0-4brt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h9v6H3Zm1.5 6h10v6h-10Zm5.6 12H2.5v-6h10v3.1m7-4.1L16 18.25h4l-2.75 3.25");
}
</style><path class="i_h0-4brt"/>`,
		"fallback": "uix-sharp:chaos-engineering",
	});
}

export default Component;
