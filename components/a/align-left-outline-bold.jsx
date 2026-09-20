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
		"content": `<style>.cn-9z7b7f {
  d: path("M3 18h15");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x22av82oi {
  d: path("M3 12h11");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="s0phu2bbs"><path class="xgrfb-bqu"/><path class="x22av82oi"/><path class="cn-9z7b7f"/></g>`,
		"fallback": "iconmind:align-left-outline-bold",
	});
}

export default Component;
