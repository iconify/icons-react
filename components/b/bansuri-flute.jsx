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
		"content": `<style>.qq1ov2bxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18L18 3a2.25 2.25 0 0 1 3 3L6 21ZM16.5 4.5l3 3m-12 9h.01");
}
</style><path class="qq1ov2bxq"/>`,
		"fallback": "uix-sharp:bansuri-flute",
	});
}

export default Component;
