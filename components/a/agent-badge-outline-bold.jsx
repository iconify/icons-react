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
		"content": `<style>.anxhbz8lo {
  d: path("M8 7h8v5l-4 4 -4 -4Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}
</style><g class="s0phu2bbs"><path class="ugdbidcqi"/><path class="anxhbz8lo"/></g>`,
		"fallback": "iconmind:agent-badge-outline-bold",
	});
}

export default Component;
