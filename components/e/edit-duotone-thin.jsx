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
		"content": `<style>.cls2bponp {
  d: path("M5 19v-4L16 4l4 4L9 19Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p289dcz6o {
  fill: currentColor;
  d: path("M5 19v-4L16 4l4 4L9 19Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="p289dcz6o"/><path class="cls2bponp"/></g>`,
		"fallback": "iconmind:edit-duotone-thin",
	});
}

export default Component;
