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
		"content": `<style>.miyi8eb4c {
  d: path("M4 5a8 3 0 0 0 16 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uigc87b2x {
  d: path("M4 5a8 3 0 0 1 16 0v5a8 3 0 0 1 -16 0Z");
}

.vdal3gb-p {
  fill: currentColor;
  d: path("M4 5a8 3 0 0 1 16 0v5a8 3 0 0 1 -16 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vhf3_kexp {
  d: path("M12 16v5");
}

.vy337188j {
  d: path("m9 18 3 3 3 -3");
}
</style><g class="s0phu2bbs"><path class="vdal3gb-p"/><path class="uigc87b2x"/><path class="miyi8eb4c"/><path class="vhf3_kexp"/><path class="vy337188j"/></g>`,
		"fallback": "iconmind:backup-duotone-bold",
	});
}

export default Component;
