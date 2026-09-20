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
		"content": `<style>.bpdfs5b6a {
  d: path("m9 15 2 2 4 -4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vqal-abhe {
  d: path("M3 8h4.5l2 -2 4 4 2 -2H21");
}
</style><g class="nrj6p8qat"><path class="vqal-abhe"/><path class="bpdfs5b6a"/></g>`,
		"fallback": "iconmind:health-probe-outline-regular",
	});
}

export default Component;
