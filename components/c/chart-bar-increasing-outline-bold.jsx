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
		"content": `<style>.e03jjq99j {
  d: path("M4 7h6");
}

.nwor_i7ms {
  d: path("M4 17h14");
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

.yw-dgs_nk {
  d: path("M4 12h10");
}
</style><g class="s0phu2bbs"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e03jjq99j"/><path class="yw-dgs_nk"/><path class="nwor_i7ms"/></g>`,
		"fallback": "iconmind:chart-bar-increasing-outline-bold",
	});
}

export default Component;
