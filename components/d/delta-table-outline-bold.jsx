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
		"content": `<style>.kchk9kbsh {
  d: path("M4 13.5h16");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vms-s--ti {
  d: path("m12 4 4.5 4.5h-9Z");
}
</style><g class="s0phu2bbs"><path class="vms-s--ti"/><path class="kchk9kbsh"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:delta-table-outline-bold",
	});
}

export default Component;
