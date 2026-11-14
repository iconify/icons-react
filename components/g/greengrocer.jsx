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
		"content": `<style>.eg5vuzbpk {
  d: path("M8.5 13h1a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 7 19v-4.5A1.5 1.5 0 0 1 8.5 13m9.5 2.75c-1.5-1.25-3.25-.5-3.25 1.75s1.75 4 3.25 3.25c1.5.75 3.25-1 3.25-3.25s-1.75-3-3.25-1.75m0 0L17.25 14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pwqv0ua4q {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M4.5 9v11.5h8.1m6.9-8.2V9");
}
</style><g class="hntgybcog"><path class="pwqv0ua4q"/><path class="eg5vuzbpk"/></g>`,
		"fallback": "uix:greengrocer",
	});
}

export default Component;
