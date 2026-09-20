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
		"content": `<style>.e70mzkkad {
  d: path("m6 9 3 3h6l3 -3");
}

.plts5tbsc {
  d: path("M6 4h12v11l-6 6 -6 -6Z");
}

.ricsl-blc {
  d: path("M12 12v9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="plts5tbsc"/><path class="e70mzkkad"/><path class="ricsl-blc"/></g>`,
		"fallback": "iconmind:ice-outline-bold",
	});
}

export default Component;
