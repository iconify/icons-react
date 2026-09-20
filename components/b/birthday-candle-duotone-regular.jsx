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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.facaoccxd {
  d: path("M8 21V11h8v10Z");
}

.iv55jvbip {
  fill: currentColor;
  d: path("M12 9c-2.5 -2 -2.5 -5 0 -7 2.5 2 2.5 5 0 7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.twp5c8mgm {
  fill: currentColor;
  d: path("M8 21V11h8v10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wv_9g9b3l {
  d: path("M12 9c-2.5 -2 -2.5 -5 0 -7 2.5 2 2.5 5 0 7");
}
</style><g class="nrj6p8qat"><path class="twp5c8mgm"/><path class="iv55jvbip"/><path class="facaoccxd"/><path class="c4khiwgvb"/><path class="wv_9g9b3l"/></g>`,
		"fallback": "iconmind:birthday-candle-duotone-regular",
	});
}

export default Component;
