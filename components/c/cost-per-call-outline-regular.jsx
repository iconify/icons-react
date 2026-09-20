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
		"content": `<style>.k4lkwhjuc {
  d: path("M4 20h9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oe1ogfbua {
  d: path("m15.5 14 2 2 -2 2");
}

.ph-bhccoq {
  d: path("M10 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.tobs8svpc {
  d: path("M4 16h13");
}

.xienbiity {
  d: path("M7 7a5 5 0 1 0 10 0A5 5 0 1 0 7 7");
}
</style><g class="nrj6p8qat"><path class="xienbiity"/><path class="ph-bhccoq"/><path class="tobs8svpc"/><path class="oe1ogfbua"/><path class="k4lkwhjuc"/></g>`,
		"fallback": "iconmind:cost-per-call-outline-regular",
	});
}

export default Component;
