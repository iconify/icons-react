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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.odiippbvx {
  d: path("M12 10v6.5");
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ri_favbdz {
  d: path("M9.5 12.5 12 10l2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="r0jamibkm"/><path class="bn_pu6j-z"/><path class="odiippbvx"/><path class="ri_favbdz"/></g>`,
		"fallback": "iconmind:folder-up-duotone-regular",
	});
}

export default Component;
