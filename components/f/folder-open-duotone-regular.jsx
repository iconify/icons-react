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
		"content": `<style>.lwyrqqb_g {
  fill: currentColor;
  d: path("m4 20 8 -8h10l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m6u_t4bqm {
  d: path("M4 20V4h5l3 3h7v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y5jslcbiw {
  d: path("m4 20 8 -8h10l-8 8Z");
}
</style><g class="nrj6p8qat"><path class="lwyrqqb_g"/><path class="m6u_t4bqm"/><path class="y5jslcbiw"/></g>`,
		"fallback": "iconmind:folder-open-duotone-regular",
	});
}

export default Component;
