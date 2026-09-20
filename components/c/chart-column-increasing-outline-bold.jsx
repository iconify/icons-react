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
		"content": `<style>.d-23-qb2d {
  d: path("M13 11v9");
}

.gacdnhbnq {
  d: path("M18 7v13");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x0cr3vblz {
  d: path("M8 15v5");
}
</style><g class="s0phu2bbs"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="x0cr3vblz"/><path class="d-23-qb2d"/><path class="gacdnhbnq"/></g>`,
		"fallback": "iconmind:chart-column-increasing-outline-bold",
	});
}

export default Component;
