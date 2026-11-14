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
		"content": `<style>.m4lwhn9uz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5L9.5 4m8.262 8.782L14.5 4M12 8.5v6m6.5 1v6M16 17l5 3m-5 0l5-3");
}
</style><path class="m4lwhn9uz"/>`,
		"fallback": "uix:black-ice",
	});
}

export default Component;
