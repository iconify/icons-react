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
		"content": `<style>.bjz8zacox {
  d: path("M14.11 9.47a5 5 0 1 1 -4.22 0");
}

.c8gqcng7k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14.11 9.47a5 5 0 1 1 -4.22 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pp3du3b3p {
  d: path("m7 7 5 -5 5 5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tjquohbbx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 7 5 -5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="tjquohbbx"/><path class="c8gqcng7k"/><path class="pp3du3b3p"/><path class="bjz8zacox"/></g>`,
		"fallback": "iconmind:agent-priority-duotone-bold",
	});
}

export default Component;
