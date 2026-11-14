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
		"content": `<style>.bm-gtsblq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.728 2.905l3 1.666a1.5 1.5 0 0 1 .772 1.312v3.234a1.5 1.5 0 0 1-.772 1.312l-3 1.666a1.5 1.5 0 0 1-1.456 0l-3-1.666A1.5 1.5 0 0 1 7.5 9.117V5.883a1.5 1.5 0 0 1 .772-1.312l3-1.666a1.5 1.5 0 0 1 1.456 0M12 12.5v4m0 0L5 21m7-4.5v5m0-5l7 4.5");
}
</style><path class="bm-gtsblq"/>`,
		"fallback": "uix:bacteriophage",
	});
}

export default Component;
