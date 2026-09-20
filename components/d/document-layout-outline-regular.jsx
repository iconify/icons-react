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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.xslwtfbwz {
  d: path("M15 11v6");
}
</style><g class="nrj6p8qat"><path class="o72p0hsyz"/><path class="kpspt_bpo"/><path class="lcdiu5g_w"/><path class="xslwtfbwz"/></g>`,
		"fallback": "iconmind:document-layout-outline-regular",
	});
}

export default Component;
