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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hqxuvmb-d {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6L22 6C22.5523 6 23 6.4477 23 7L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 7C1 6.4477 1.4477 6 2 6Z");
  stroke: none;
}

.o2bxidbxq {
  d: path("M2 7L22 7L22 17L2 17L2 7ZM6 10L6 14");
}
</style><g class="gp_8x1bzb"><path class="hqxuvmb-d"/><path class="o2bxidbxq"/></g>`,
		"fallback": "keyline-icons:input-sharp-two-tone",
	});
}

export default Component;
