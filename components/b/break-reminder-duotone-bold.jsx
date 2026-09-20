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
		"content": `<style>.e-5ruw-ab {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 3a3 3 0 0 1 0 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j5kde3paa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 3a3 3 0 0 1 0 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ng_tlibuk {
  d: path("M15 9a3 3 0 0 1 0 6");
}

.r57e8zbzz {
  d: path("M4 9v9h11V9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s0v-_1bji {
  d: path("M7 3a3 3 0 0 1 0 6");
}

.v9hia4w8h {
  d: path("M12 3a3 3 0 0 1 0 6");
}

.wt_cvy0ig {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 9v9h11V9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yqb2-vyaq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 9a3 3 0 0 1 0 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="wt_cvy0ig"/><path class="yqb2-vyaq"/><path class="j5kde3paa"/><path class="e-5ruw-ab"/><path class="r57e8zbzz"/><path class="ng_tlibuk"/><path class="s0v-_1bji"/><path class="v9hia4w8h"/></g>`,
		"fallback": "iconmind:break-reminder-duotone-bold",
	});
}

export default Component;
