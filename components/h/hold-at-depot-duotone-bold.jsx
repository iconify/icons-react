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
		"content": `<style>.e77gki8ci {
  d: path("M2 20V10l3 -3h14l3 3v10");
}

.g-zvf1x3c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14.5 11v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hm52d9bxd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 20V10l3 -3h14l3 3v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m7aa3ibix {
  d: path("M14.5 11v6");
}

.mc35iub7y {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9.5 11v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n92b0ebji {
  d: path("M9.5 11v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="hm52d9bxd"/><path class="mc35iub7y"/><path class="g-zvf1x3c"/><path class="e77gki8ci"/><path class="n92b0ebji"/><path class="m7aa3ibix"/></g>`,
		"fallback": "iconmind:hold-at-depot-duotone-bold",
	});
}

export default Component;
