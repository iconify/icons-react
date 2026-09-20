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
		"content": `<style>.diipsobkl {
  d: path("M5 3v18h14V3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1jjkky7x {
  d: path("M8 18h8");
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.oktx96bat {
  fill: currentColor;
  d: path("M9 9V6l3 -3 3 3v3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ucf3ueb9q {
  fill: currentColor;
  d: path("M5 3v18h14V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wvn953rdk {
  d: path("M9 9V6l3 -3 3 3v3Z");
}
</style><g class="hntgybcog"><path class="ucf3ueb9q"/><path class="oktx96bat"/><path class="diipsobkl"/><path class="wvn953rdk"/><path class="mvm7r4bea"/><path class="l1jjkky7x"/></g>`,
		"fallback": "iconmind:house-rules-duotone-thin",
	});
}

export default Component;
