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
		"content": `<style>.dahw1rbat {
  d: path("M18 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.eb5zxsbop {
  d: path("M4 5a2 2 0 0 1 4 0v3a2 2 0 0 1 -4 0Zm0 3c0 6 6 12 12 12m0 0a2 2 0 0 0 4 0v-3a2 2 0 0 0 -4 0Z");
}

.h-2cwy44u {
  d: path("M19 3v5");
}

.hh3gqccwb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 5a2 2 0 0 1 4 0v3a2 2 0 0 1 -4 0Zm0 3c0 6 6 12 12 12m0 0a2 2 0 0 0 4 0v-3a2 2 0 0 0 -4 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rpvjsebmn {
  fill: currentColor;
  d: path("M18 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yvbmj9bli {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 3v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="rpvjsebmn"/><path class="hh3gqccwb"/><path class="yvbmj9bli"/><path class="eb5zxsbop"/><path class="h-2cwy44u"/><path class="dahw1rbat"/></g>`,
		"fallback": "iconmind:crisis-line-duotone-bold",
	});
}

export default Component;
