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
		"content": `<style>.g_bnyexhm {
  d: path("M4 13a5 5 0 0 0 10 0m-5 5v3m9.125-16.375l.139.324a1.5 1.5 0 0 0 .787.787l.324.139a.408.408 0 0 1 0 .75l-.324.139a1.5 1.5 0 0 0-.787.787l-.139.324a.408.408 0 0 1-.75 0l-.139-.324a1.5 1.5 0 0 0-.787-.787l-.324-.139a.408.408 0 0 1 0-.75l.324-.139a1.5 1.5 0 0 0 .787-.787l.139-.324a.408.408 0 0 1 .75 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z720dd3bk {
  d: path("M9 7.5za2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 9 16.5A2.5 2.5 0 0 1 6.5 14v-4A2.5 2.5 0 0 1 9 7.5");
}
</style><g class="hntgybcog"><path class="z720dd3bk"/><path class="g_bnyexhm"/></g>`,
		"fallback": "uix:ai-mic",
	});
}

export default Component;
