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
		"content": `<style>.ajq5z5bvz {
  d: path("M4 9h11v11H4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ve1q15bsq {
  d: path("m15 9 5 -5v11l-5 5");
}

.vib1b5bye {
  d: path("m4 9 5 -5h11l-5 5");
}
</style><g class="nrj6p8qat"><path class="ajq5z5bvz"/><path class="vib1b5bye"/><path class="ve1q15bsq"/></g>`,
		"fallback": "iconmind:course-module-outline-regular",
	});
}

export default Component;
