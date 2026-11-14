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
		"content": `<style>.dhqnqfb6x {
  d: path("M6.75 13.5q5.25 2 10.5 0M12 2.5v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ozzb4qbps {
  d: path("M12 3.5L4 19q8 3 16 0Zm0 0L9.25 20M12 3.5L14.75 20");
}
</style><g class="hntgybcog"><path class="ozzb4qbps"/><path class="dhqnqfb6x"/></g>`,
		"fallback": "uix:cast-net",
	});
}

export default Component;
