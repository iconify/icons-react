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

.lae94fb4b {
  d: path("m4.5 11l5 4l5-4m3.625-6.375l.139.324a1.5 1.5 0 0 0 .787.787l.324.139a.408.408 0 0 1 0 .75l-.324.139a1.5 1.5 0 0 0-.787.787l-.139.324a.408.408 0 0 1-.75 0l-.139-.324a1.5 1.5 0 0 0-.787-.787l-.324-.139a.408.408 0 0 1 0-.75l.324-.139a1.5 1.5 0 0 0 .787-.787l.139-.324a.408.408 0 0 1 .75 0");
}

.p8rk-657i {
  d: path("M6.5 9h6a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5h-6A3.5 3.5 0 0 1 3 16.5v-4A3.5 3.5 0 0 1 6.5 9");
}
</style><g class="hntgybcog"><path class="p8rk-657i"/><path class="lae94fb4b"/></g>`,
		"fallback": "uix:ai-mail",
	});
}

export default Component;
