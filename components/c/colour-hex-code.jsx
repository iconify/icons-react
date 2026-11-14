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
		"content": `<style>.i71nj_byy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5L5.5 19m7-14L11 19M3 9.5h11.5m-12 5H14m3.25-6h4.5v7h-4.5Z");
}
</style><path class="i71nj_byy"/>`,
		"fallback": "uix-sharp:colour-hex-code",
	});
}

export default Component;
