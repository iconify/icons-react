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
		"content": `<style>.ieb7idbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.5V14a6.5 6.5 0 0 1 13 0v7.5M3.5 14h17m-17 7.5h17M12 3v4.5");
}
</style><path class="ieb7idbil"/>`,
		"fallback": "uix:dome",
	});
}

export default Component;
