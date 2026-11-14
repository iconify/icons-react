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
		"content": `<style>.ezz9uv57k {
  d: path("M4.5 5h15a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t5qp6ss9c {
  d: path("m12.588 9.191l.236.58a1.5 1.5 0 0 0 1.279.929l.625.046a.635.635 0 0 1 .363 1.118l-.478.404a1.5 1.5 0 0 0-.489 1.504l.15.607a.635.635 0 0 1-.951.691l-.532-.33a1.5 1.5 0 0 0-1.582 0l-.532.33a.635.635 0 0 1-.951-.691l.15-.607a1.5 1.5 0 0 0-.489-1.504l-.478-.404a.635.635 0 0 1 .363-1.118l.625-.046a1.5 1.5 0 0 0 1.279-.929l.236-.58a.635.635 0 0 1 1.176 0");
}
</style><g class="hntgybcog"><path class="ezz9uv57k"/><path class="t5qp6ss9c"/></g>`,
		"fallback": "uix:battle-pass",
	});
}

export default Component;
