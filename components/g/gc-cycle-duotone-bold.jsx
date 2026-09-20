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
		"content": `<style>.d8z1r1beo {
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.gb580sbiw {
  d: path("M10 12.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.q8cjcf-8e {
  fill: currentColor;
  d: path("M10 12.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.sobs47b0t {
  d: path("M12 2 9 5l3 3");
}

.yrm0q7bju {
  fill: currentColor;
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yrm0q7bju"/><path class="q8cjcf-8e"/><path class="d8z1r1beo"/><path class="sobs47b0t"/><path class="gb580sbiw"/></g>`,
		"fallback": "iconmind:gc-cycle-duotone-bold",
	});
}

export default Component;
