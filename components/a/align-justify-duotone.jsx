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

.x9b50xb7v {
  d: path("M3 9H21M3 21H21");
}

.zvz-c3bhf {
  stroke-opacity: 0.4;
  d: path("M3 3H21M3 15H21");
}
</style><g class="nrj6p8qat"><path class="zvz-c3bhf"/><path class="x9b50xb7v"/></g>`,
		"fallback": "keyline-icons:align-justify-duotone",
	});
}

export default Component;
