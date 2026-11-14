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
		"content": `<style>.tuimtmmhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11za4.5 4.5 0 0 1 4.5 4.5V17a4.5 4.5 0 0 1-4.5 4.5A4.5 4.5 0 0 1 7.5 17v-1.5A4.5 4.5 0 0 1 12 11M8 8Q6.5 6.5 8 5.25T8 2.5M12 8q-1.5-1.5 0-2.75t0-2.75M16 8q-1.5-1.5 0-2.75t0-2.75m-5.75 12h3.5");
}
</style><path class="tuimtmmhi"/>`,
		"fallback": "uix:cabin-smoke",
	});
}

export default Component;
