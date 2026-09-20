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
		"content": `<style>.c46fyy1pe {
  d: path("m16 12 3 3 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sbiy6014w {
  d: path("M3 7h9v8h7");
}
</style><g class="s0phu2bbs"><path class="sbiy6014w"/><path class="c46fyy1pe"/></g>`,
		"fallback": "iconmind:fallback-outline-bold",
	});
}

export default Component;
