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
		"content": `<style>.dmagrczkx {
  d: path("M7 16.75h10a1 1 0 0 1 1 1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1a1 1 0 0 1 1-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.itps4cchs {
  d: path("M6.25 14h11.5a3.75 3.75 0 0 1 3.75 3.75a3.75 3.75 0 0 1-3.75 3.75H6.25a3.75 3.75 0 0 1-3.75-3.75A3.75 3.75 0 0 1 6.25 14M3 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m9.75-1.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m5.75 4.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="itps4cchs"/><path class="dmagrczkx"/></g>`,
		"fallback": "uix:category-personal-care",
	});
}

export default Component;
