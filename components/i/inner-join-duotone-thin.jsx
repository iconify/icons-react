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
		"content": `<style>.ewesysbte {
  d: path("M12 20.37a8.5 8.5 0 0 1 0 -16.74");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qn3i6zboj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 20.37a8.5 8.5 0 0 1 0 -16.74");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.taq_l6e3y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3.63a8.5 8.5 0 0 1 0 16.74");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ygpel9b0x {
  d: path("M12 3.63a8.5 8.5 0 0 1 0 16.74");
}
</style><g class="hntgybcog"><path class="taq_l6e3y"/><path class="qn3i6zboj"/><path class="ygpel9b0x"/><path class="ewesysbte"/></g>`,
		"fallback": "iconmind:inner-join-duotone-thin",
	});
}

export default Component;
