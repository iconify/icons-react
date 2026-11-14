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
		"content": `<style>.guyplobse {
  d: path("M10 21.5v-11a2 2 0 0 1 4 0v4h3a2 2 0 0 1 2 2v5");
}

.omqe-motk {
  d: path("M7 11.5a5 5 0 1 1 10 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdli8kbcg {
  d: path("M4.25 12a8 8 0 1 1 15.5 0");
}
</style><g class="ulnmmdpxh"><path class="guyplobse"/><path class="omqe-motk"/><path class="zdli8kbcg"/></g>`,
		"fallback": "uix-sharp:air-tap",
	});
}

export default Component;
