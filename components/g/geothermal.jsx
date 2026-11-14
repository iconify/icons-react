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
		"content": `<style>.s04-r6rxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h6l2 4l2-4h9M17 15V9h4.5M9 12c-1.5-2.5 1.5-4.5 0-7.5m3.5 7.5c-1.5-2.5 1.5-4.5 0-7.5");
}
</style><path class="s04-r6rxm"/>`,
		"fallback": "uix:geothermal",
	});
}

export default Component;
