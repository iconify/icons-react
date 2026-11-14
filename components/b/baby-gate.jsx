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
		"content": `<style>.ltxygj25d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V3h17v18.5M3.5 12h17m-17 6.75h17M7.75 12v6.75M12 12v6.75M16.25 12v6.75");
}
</style><path class="ltxygj25d"/>`,
		"fallback": "uix:baby-gate",
	});
}

export default Component;
