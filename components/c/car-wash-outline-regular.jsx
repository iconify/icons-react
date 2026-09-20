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
		"content": `<style>.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fquh7rbnp {
  d: path("M15 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.il5vdka2i {
  d: path("m4 2 2 2");
}

.jqdpxvb2f {
  d: path("m15 2 2 2");
}

.k3-s964vv {
  d: path("m9.5 2 2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sqwju3bsh {
  d: path("M2 16V8.5h4L9.5 5h5L18 8.5h4V16Z");
}
</style><g class="nrj6p8qat"><path class="sqwju3bsh"/><path class="du3agkbjb"/><path class="fquh7rbnp"/><path class="il5vdka2i"/><path class="k3-s964vv"/><path class="jqdpxvb2f"/></g>`,
		"fallback": "iconmind:car-wash-outline-regular",
	});
}

export default Component;
