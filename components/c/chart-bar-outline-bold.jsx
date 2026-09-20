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
		"content": `<style>.d4s5t4bpo {
  d: path("M8 12v8");
}

.j4if4rbfv {
  d: path("M18 14v6");
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

.y4-ssjnrw {
  d: path("M13 8v12");
}
</style><g class="s0phu2bbs"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="d4s5t4bpo"/><path class="y4-ssjnrw"/><path class="j4if4rbfv"/></g>`,
		"fallback": "iconmind:chart-bar-outline-bold",
	});
}

export default Component;
