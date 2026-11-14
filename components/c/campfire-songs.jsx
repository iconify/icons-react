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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jm2acyx0i {
  d: path("M6.5 15.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m9 3.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0V14c0 2 2 2 2 4");
}

.rfdl2w3mx {
  d: path("M12.5 15.75a4.5 4.5 0 1 1-4.25-4.25a3.5 3.5 0 1 1 4.25 4.25m1.75-6L20.5 3.5m-2.25.25l2 2");
}
</style><g class="hntgybcog"><path class="rfdl2w3mx"/><path class="jm2acyx0i"/></g>`,
		"fallback": "uix:campfire-songs",
	});
}

export default Component;
