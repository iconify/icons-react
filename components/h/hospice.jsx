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
		"content": `<style>.b6yihfblf {
  d: path("M10.5 21.5V18c0-.75.6-1.25 1.5-1.25s1.5.5 1.5 1.25v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ouxqvjcwc {
  d: path("M6 12v7.5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V12m.5-9.75c-2 .25-3.25 1.75-3.25 3.5S16.75 9 18.75 9c1 0 2-.5 2.5-1.25c-2 0-3.5-1.5-3.5-3.25q0-1.5.75-2.25");
}

.px3l7mg6c {
  d: path("m3 14l9-7l9 7");
}
</style><g class="hntgybcog"><path class="px3l7mg6c"/><path class="ouxqvjcwc"/><path class="b6yihfblf"/></g>`,
		"fallback": "uix:hospice",
	});
}

export default Component;
