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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uhkbmlahb {
  d: path("M4 20V10h16");
}

.vmh-l_baq {
  d: path("m15 5 5 5 -5 5");
}
</style><g class="nrj6p8qat"><path class="uhkbmlahb"/><path class="vmh-l_baq"/></g>`,
		"fallback": "iconmind:corner-up-right-outline-regular",
	});
}

export default Component;
