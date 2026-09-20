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
		"content": `<style>.atbcai_gj {
  fill: currentColor;
  d: path("M3 5a5 2.5 0 0 1 10 0v8a5 2.5 0 0 1 -10 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ejuwxub1t {
  d: path("M3 5a5 2.5 0 0 1 10 0v8a5 2.5 0 0 1 -10 0Z");
}

.olmwgycdy {
  d: path("M15 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ptw-mzbbd {
  d: path("M13 21a4 4 0 0 1 8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.unova7b3b {
  fill: currentColor;
  d: path("M15 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xlo0hdbks {
  d: path("M3 5a5 2.5 0 0 0 10 0");
}
</style><g class="s0phu2bbs"><path class="atbcai_gj"/><path class="unova7b3b"/><path class="ejuwxub1t"/><path class="xlo0hdbks"/><path class="olmwgycdy"/><path class="ptw-mzbbd"/></g>`,
		"fallback": "iconmind:data-owner-duotone-bold",
	});
}

export default Component;
