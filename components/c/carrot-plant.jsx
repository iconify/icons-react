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
		"content": `<style>.r8pe9swvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19M8 10l3.25 9.75a.75.75 0 0 0 1.5 0L16 10m-4 0V3m0 7c-2-3-3.5-4.5-5.5-5.5M12 10c2-3 3.5-4.5 5.5-5.5");
}
</style><path class="r8pe9swvc"/>`,
		"fallback": "uix:carrot-plant",
	});
}

export default Component;
