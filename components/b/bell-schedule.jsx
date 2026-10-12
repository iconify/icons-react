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
		"content": `<style>.nhr462b7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.25a6 6 0 0 0-6 6v1.5c0 .7-.3 1.35-.8 1.8l-.4.35c-.65.6-.25 1.85.7 1.85h13c.95 0 1.35-1.25.7-1.85l-.4-.35c-.5-.45-.8-1.1-.8-1.8v-1.5a6 6 0 0 0-6-6m0-4.5v4.5m-1.25 14h2.5");
}
</style><path class="nhr462b7o"/>`,
		"fallback": "iconoven:bell-schedule",
	});
}

export default Component;
