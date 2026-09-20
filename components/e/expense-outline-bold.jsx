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
		"content": `<style>.di4vjgyye {
  d: path("M5 12h5");
}

.lxjzt-y8t {
  d: path("M7.5 9.5 10 12l-2.5 2.5");
}

.ogtwkzbca {
  d: path("M22 9.5h-7v5h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="vyks9vbfn"/><path class="ogtwkzbca"/><path class="di4vjgyye"/><path class="lxjzt-y8t"/></g>`,
		"fallback": "iconmind:expense-outline-bold",
	});
}

export default Component;
