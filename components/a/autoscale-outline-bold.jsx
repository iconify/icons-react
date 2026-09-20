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
		"content": `<style>.cnllexbmp {
  d: path("M3 5a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.fddkg0b5z {
  d: path("M19 7v10");
}

.jtvi3oeim {
  d: path("m16 10 3 -3 3 3");
}

.kvksesm4i {
  d: path("M3 15a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="cnllexbmp"/><path class="kvksesm4i"/><path class="fddkg0b5z"/><path class="jtvi3oeim"/></g>`,
		"fallback": "iconmind:autoscale-outline-bold",
	});
}

export default Component;
