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
		"content": `<style>.f-sv1wbyp {
  d: path("M7 21L7 3M3 7L7 3L11 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vrem0jbde {
  stroke-opacity: 0.4;
  d: path("M17 3L17 21M21 17L17 21L13 17");
}
</style><g class="nrj6p8qat"><path class="vrem0jbde"/><path class="f-sv1wbyp"/></g>`,
		"fallback": "keyline-icons:arrow-up-down-duotone",
	});
}

export default Component;
