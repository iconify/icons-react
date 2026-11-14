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
		"content": `<style>.bkk7gdcuj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5h11c.5-4.5-1.5-7.5-3-10l1-5h-7l1 5C5 13 3 16 3.5 20.5M12 8l9.5-3.75");
}
</style><path class="bkk7gdcuj"/>`,
		"fallback": "uix:cezve-pot",
	});
}

export default Component;
