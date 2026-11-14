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
		"content": `<style>.d7ni1091r {
  d: path("M12 13V7.5A5.5 5.5 0 0 0 6.5 13Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p9j3zs2uc {
  d: path("M3.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0m6-10.5h5m-2.5 0v2");
}
</style><g class="hntgybcog"><path class="p9j3zs2uc"/><path class="d7ni1091r"/></g>`,
		"fallback": "uix:countdown-match",
	});
}

export default Component;
