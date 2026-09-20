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
		"content": `<style>.ho-f2ccpq {
  d: path("M8 9h3l3 3h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oywe9jbcq {
  d: path("M8 15h3l3 -3");
}

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}
</style><g class="nrj6p8qat"><path class="ri2m-q_tv"/><path class="ho-f2ccpq"/><path class="oywe9jbcq"/></g>`,
		"fallback": "iconmind:fan-in-job-outline-regular",
	});
}

export default Component;
