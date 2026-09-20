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
		"content": `<style>.ghtf55bhy {
  d: path("m19 10 -4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mc77_dknm {
  d: path("m15 10 4 4");
}

.s0mwfjblf {
  d: path("M2 9a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.t1v31abzy {
  d: path("M13 9a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="s0mwfjblf"/><path class="t1v31abzy"/><path class="mc77_dknm"/><path class="ghtf55bhy"/></g>`,
		"fallback": "iconmind:dedupe-outline-thin",
	});
}

export default Component;
