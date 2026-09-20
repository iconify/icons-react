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
		"content": `<style>.a4k633d3m {
  d: path("M3 12a2.5 2.5 0 0 1 2.5 -2.5h13A2.5 2.5 0 0 1 21 12a2.5 2.5 0 0 1 -2.5 2.5h-13A2.5 2.5 0 0 1 3 12");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o-kvq4blj {
  fill: currentColor;
  d: path("M3 12a2.5 2.5 0 0 1 2.5 -2.5h13A2.5 2.5 0 0 1 21 12a2.5 2.5 0 0 1 -2.5 2.5h-13A2.5 2.5 0 0 1 3 12");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="o-kvq4blj"/><path class="mg7aqnbsf"/><path class="a4k633d3m"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:frozen-layer-duotone-regular",
	});
}

export default Component;
