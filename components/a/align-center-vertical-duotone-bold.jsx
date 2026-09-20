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
		"content": `<style>.akf7y5bsb {
  d: path("M8 7h8v4H8Z");
}

.c3a-odz8a {
  d: path("M12 18.5V21");
}

.rr985ibot {
  d: path("M12 3v2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sge-6ebfv {
  fill: currentColor;
  d: path("M9.5 14h5v4h-5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.v4qx2ccfm {
  fill: currentColor;
  d: path("M8 7h8v4H8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xgyiae7-j {
  d: path("M9.5 14h5v4h-5Z");
}
</style><g class="s0phu2bbs"><path class="v4qx2ccfm"/><path class="sge-6ebfv"/><path class="rr985ibot"/><path class="c3a-odz8a"/><path class="akf7y5bsb"/><path class="xgyiae7-j"/></g>`,
		"fallback": "iconmind:align-center-vertical-duotone-bold",
	});
}

export default Component;
