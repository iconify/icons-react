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
		"content": `<style>.cmmj68rbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.5h10.5A1.75 1.75 0 0 1 19 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 19.75V4.25A1.75 1.75 0 0 1 6.75 2.5M2.5 12h19M12 2.5V9m0 6v6.5");
}
</style><path class="cmmj68rbp"/>`,
		"fallback": "uix:badminton-court",
	});
}

export default Component;
