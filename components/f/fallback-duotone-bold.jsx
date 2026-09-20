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

.ditq3ccrr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 7h9v8h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pnyhwuqhh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 12 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
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
</style><g class="s0phu2bbs"><path class="ditq3ccrr"/><path class="pnyhwuqhh"/><path class="sbiy6014w"/><path class="c46fyy1pe"/></g>`,
		"fallback": "iconmind:fallback-duotone-bold",
	});
}

export default Component;
