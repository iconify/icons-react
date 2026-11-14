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
		"content": `<style>.vbr6uynae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 7.5l1.5-3h14l1.5 3M5 20l14-3.5m-14 0L19 20M12 8c1.5 1.5 3 2.5 3 4.25a3 3 0 0 1-6 0C9 10.5 10.5 9.5 12 8");
}
</style><path class="vbr6uynae"/>`,
		"fallback": "uix:campfire-grill",
	});
}

export default Component;
