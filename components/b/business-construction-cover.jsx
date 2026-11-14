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
		"content": `<style>.u_mshn8ui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8.5a5.5 5.5 0 0 1 11 0m-13 0h15M12 3v2.75M12 11l6 2v3c0 3-2.5 4.75-6 5.75c-3.5-1-6-2.75-6-5.75v-3Z");
}
</style><path class="u_mshn8ui"/>`,
		"fallback": "uix:business-construction-cover",
	});
}

export default Component;
