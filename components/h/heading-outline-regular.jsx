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
		"content": `<style>.mpjdm200q {
  d: path("M6 4v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tkeq0bpvv {
  d: path("M18 4v16");
}

.vslz5yb3q {
  d: path("M6 12h12");
}
</style><g class="nrj6p8qat"><path class="mpjdm200q"/><path class="tkeq0bpvv"/><path class="vslz5yb3q"/></g>`,
		"fallback": "iconmind:heading-outline-regular",
	});
}

export default Component;
