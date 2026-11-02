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
		"content": `<style>.c_2oglksg {
  d: path("M3 20h18m-9 0V4H5v16");
}

.mh_q-d6ev {
  stroke-opacity: 0.4;
  d: path("m12 11l2-2l5 5v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mh_q-d6ev"/><path class="c_2oglksg"/></g>`,
		"fallback": "coolicons:building-2-duocolor-sharp",
	});
}

export default Component;
