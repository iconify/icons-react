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
		"content": `<style>.v93yyvrno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 15.5h12.5A2.75 2.75 0 0 1 21 18.25A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25a2.75 2.75 0 0 1 2.75-2.75m.75 0V6h11v9.5M5 6h14m-8.5-3h3M12 3v3m0 12.25h.01");
}
</style><path class="v93yyvrno"/>`,
		"fallback": "uix:ice-cream-maker",
	});
}

export default Component;
