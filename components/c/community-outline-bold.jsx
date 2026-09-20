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
		"content": `<style>.a0o0t-zvo {
  d: path("M15 19a3 3 0 0 1 6 0");
}

.efnc6pc0s {
  d: path("M16 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.maut9lbea {
  d: path("M4 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tturp2djn {
  d: path("M9 11a3 3 0 0 1 6 0");
}

.vzsi2jzmx {
  d: path("M3 19a3 3 0 0 1 6 0");
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="ymw3aibdo"/><path class="tturp2djn"/><path class="maut9lbea"/><path class="vzsi2jzmx"/><path class="efnc6pc0s"/><path class="a0o0t-zvo"/></g>`,
		"fallback": "iconmind:community-outline-bold",
	});
}

export default Component;
