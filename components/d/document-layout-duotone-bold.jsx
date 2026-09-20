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
		"content": `<style>.kpspt_bpo {
  d: path("M7 8h10");
}

.lcdiu5g_w {
  d: path("M9 11v6");
}

.nogsotb5y {
  fill: currentColor;
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xslwtfbwz {
  d: path("M15 11v6");
}
</style><g class="s0phu2bbs"><path class="nogsotb5y"/><path class="o72p0hsyz"/><path class="kpspt_bpo"/><path class="lcdiu5g_w"/><path class="xslwtfbwz"/></g>`,
		"fallback": "iconmind:document-layout-duotone-bold",
	});
}

export default Component;
