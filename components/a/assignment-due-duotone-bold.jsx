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
		"content": `<style>.bk7hbbu4y {
  d: path("M11 14a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.e1ybcubxb {
  d: path("M15 11v3h3");
}

.gwny-o4ct {
  d: path("M2 20V6h7l2 2h11v12Z");
}

.pkret5buk {
  fill: currentColor;
  d: path("M11 14a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rd3_-g5sv {
  fill: currentColor;
  d: path("M2 20V6h7l2 2h11v12Z");
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
</style><g class="s0phu2bbs"><path class="rd3_-g5sv"/><path class="pkret5buk"/><path class="gwny-o4ct"/><path class="bk7hbbu4y"/><path class="e1ybcubxb"/></g>`,
		"fallback": "iconmind:assignment-due-duotone-bold",
	});
}

export default Component;
