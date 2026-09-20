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

.r0uia_bgu {
  d: path("M19 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.u1gt5absq {
  d: path("M3 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uwi1_aczt {
  d: path("M21 4 5 20");
}

.ywch90sba {
  d: path("m3 4 16 16");
}
</style><g class="nrj6p8qat"><path class="ywch90sba"/><path class="uwi1_aczt"/><path class="u1gt5absq"/><path class="r0uia_bgu"/></g>`,
		"fallback": "iconmind:fencing-outline-regular",
	});
}

export default Component;
