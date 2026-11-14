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
		"content": `<style>.z08194bhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14h17l-1.25 5.5a2 2 0 0 1-2 1.5H6.75a2 2 0 0 1-2-1.5Zm7-4h.01m2.99-3.5h.01M12.5 3h.01");
}
</style><path class="z08194bhn"/>`,
		"fallback": "uix:feed-the-pet",
	});
}

export default Component;
