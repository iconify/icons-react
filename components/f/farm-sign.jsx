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
		"content": `<style>.fzeofy8dn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.337 7.024l1.714-2A1.5 1.5 0 0 1 6.19 4.5h11.62a1.5 1.5 0 0 1 1.139.524l1.714 2a1.5 1.5 0 0 1 0 1.952l-1.714 2a1.5 1.5 0 0 1-1.139.524H6.19a1.5 1.5 0 0 1-1.139-.524l-1.714-2a1.5 1.5 0 0 1 0-1.952M12 11.5v10m0-19v2");
}
</style><path class="fzeofy8dn"/>`,
		"fallback": "uix:farm-sign",
	});
}

export default Component;
