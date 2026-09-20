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
		"content": `<style>.eglg1ps9j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 15 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.heogippjv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 10 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pl75u7wzh {
  d: path("m7 10 3 -3 3 3 3 -3 3 3");
}

.r3faxubne {
  d: path("M4 4v16");
}

.v7dqcwgbe {
  d: path("m7 15 3 -3 3 3 3 -3 3 3");
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="eglg1ps9j"/><path class="heogippjv"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="v7dqcwgbe"/><path class="pl75u7wzh"/></g>`,
		"fallback": "iconmind:comparison-period-duotone-regular",
	});
}

export default Component;
