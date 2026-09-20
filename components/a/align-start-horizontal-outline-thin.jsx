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
		"content": `<style>.b26q0zi5z {
  d: path("M14 7h4v6h-4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.rtofn9dtv {
  d: path("M7 7h4v10H7Z");
}
</style><g class="hntgybcog"><path class="mg7aqnbsf"/><path class="rtofn9dtv"/><path class="b26q0zi5z"/></g>`,
		"fallback": "iconmind:align-start-horizontal-outline-thin",
	});
}

export default Component;
