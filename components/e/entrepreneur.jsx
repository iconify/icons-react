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
		"content": `<style>.eidsz01kr {
  d: path("M14.472 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.931 0 1.814.108 2.625.311M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m14.594 9.321l-.055.933a1.5 1.5 0 0 1-.437.972l-1.188 1.188a1.5 1.5 0 0 1-2.121 0l-.707-.707a1.5 1.5 0 0 1 0-2.121l1.188-1.188a1.5 1.5 0 0 1 .972-.437l.933-.055a1.338 1.338 0 0 1 1.415 1.415");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s6fh-2b0e {
  d: path("m17.47 15.702l-2.122.353l-1.06 1.061l1.414.354m4.596 1.06l-.353 2.122l-1.061 1.06l-.354-1.414");
}
</style><g class="hntgybcog"><path class="eidsz01kr"/><path class="s6fh-2b0e"/></g>`,
		"fallback": "uix:entrepreneur",
	});
}

export default Component;
