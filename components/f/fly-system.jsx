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
		"content": `<style>.g2ov_q17d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19M5 15h14v3H5ZM8 4v11m0 0l-1.5-1.5M16 4v11m0 0l1.5-1.5");
}
</style><path class="g2ov_q17d"/>`,
		"fallback": "uix-sharp:fly-system",
	});
}

export default Component;
