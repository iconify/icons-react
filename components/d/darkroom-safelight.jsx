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
		"content": `<style>.fgotwsz6v {
  d: path("M7.625 3h8.75A2.625 2.625 0 0 1 19 5.625v4.75A2.625 2.625 0 0 1 16.375 13h-8.75A2.625 2.625 0 0 1 5 10.375v-4.75A2.625 2.625 0 0 1 7.625 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z34iehbot {
  d: path("M9.25 5.75h5.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-5.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5M12 16v5m-4.5-5.5l-2 4m11-4l2 4");
}
</style><g class="hntgybcog"><path class="fgotwsz6v"/><path class="z34iehbot"/></g>`,
		"fallback": "uix:darkroom-safelight",
	});
}

export default Component;
