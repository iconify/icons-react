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
		"content": `<style>.gb4-n9nmm {
  d: path("M6 8.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sy0rbggoo {
  d: path("M10.5 14.25V20a1.5 1.5 0 0 0 3 0v-5.75m-2.021-2.796a3 3 0 0 1-2.433-2.433");
}
</style><g class="hntgybcog"><path class="gb4-n9nmm"/><path class="sy0rbggoo"/></g>`,
		"fallback": "uix:dodge-tool",
	});
}

export default Component;
