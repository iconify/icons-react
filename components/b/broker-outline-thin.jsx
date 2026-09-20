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
		"content": `<style>.embasub5x {
  d: path("M11 14.5 8.5 17l2.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ia4sldbfw {
  d: path("M3 21a9 9 0 0 1 18 0");
}

.kxfa7js9d {
  d: path("m13 14.5 2.5 2.5 -2.5 2.5");
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.x__zi9byl {
  d: path("M8.5 17h7");
}
</style><g class="hntgybcog"><path class="pemn838wn"/><path class="ia4sldbfw"/><path class="x__zi9byl"/><path class="embasub5x"/><path class="kxfa7js9d"/></g>`,
		"fallback": "iconmind:broker-outline-thin",
	});
}

export default Component;
