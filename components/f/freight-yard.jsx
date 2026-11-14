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
		"content": `<style>.yo450zb2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19M4 3v18.5M20 3v18.5m-11.5-7h7A1.5 1.5 0 0 1 17 16v4a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 20v-4a1.5 1.5 0 0 1 1.5-1.5m.75 0v7m5.5-7v7M12 3v11.5");
}
</style><path class="yo450zb2g"/>`,
		"fallback": "uix:freight-yard",
	});
}

export default Component;
