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

.pq89r888z {
  stroke-opacity: 0.4;
  d: path("M2 11H18C19.1046 11 20 10.1046 20 9V5C20 3.3431 18.6569 2 17 2H5C3.3431 2 2 3.3431 2 5V17C2 18.6569 3.3431 20 5 20H9C10.1046 20 11 19.1046 11 18V2");
}

.yrxuhgb1c {
  d: path("M19 16L19 22M16 19L22 19");
}
</style><g class="nrj6p8qat"><path class="pq89r888z"/><path class="yrxuhgb1c"/></g>`,
		"fallback": "keyline-icons:grid-2x2-plus-duotone",
	});
}

export default Component;
