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
		"content": `<style>.ce80bno8x {
  d: path("M9 5V2h6v3");
}

.l51r-wb3s {
  fill: currentColor;
  d: path("M4 5v16h16V5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q8wiyhb5n {
  d: path("m7 11 2 2 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.szshe-6ah {
  d: path("M7 17h10");
}

.z7wppxt9k {
  d: path("M4 5v16h16V5Z");
}
</style><g class="s0phu2bbs"><path class="l51r-wb3s"/><path class="z7wppxt9k"/><path class="ce80bno8x"/><path class="q8wiyhb5n"/><path class="szshe-6ah"/></g>`,
		"fallback": "iconmind:chore-list-duotone-bold",
	});
}

export default Component;
