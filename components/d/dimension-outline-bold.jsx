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
		"content": `<style>.mol-ojbtj {
  d: path("m7 17 8 -8");
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

.y9a3risze {
  d: path("M13.5 7H17v3.5");
}
</style><g class="s0phu2bbs"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="mol-ojbtj"/><path class="y9a3risze"/></g>`,
		"fallback": "iconmind:dimension-outline-bold",
	});
}

export default Component;
