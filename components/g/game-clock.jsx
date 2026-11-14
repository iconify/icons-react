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
		"content": `<style>.h8jv5bbog {
  d: path("M12 13.5v-5a5 5 0 0 1 5 5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0gqobcgu {
  d: path("M4 13.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0m5.5-11h5m-2.5 0v3");
}
</style><g class="hntgybcog"><path class="y0gqobcgu"/><path class="h8jv5bbog"/></g>`,
		"fallback": "uix:game-clock",
	});
}

export default Component;
