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
		"content": `<style>.bdf4slb9j {
  d: path("M5 7L11 7C12.1046 7 13 7.8954 13 9L13 15C13 16.1046 12.1046 17 11 17L5 17C3.8954 17 3 16.1046 3 15L3 9C3 7.8954 3.8954 7 5 7ZM3 3H21M3 21H21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p-cgzablu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 6L11 6C12.6569 6 14 7.3431 14 9L14 15C14 16.6569 12.6569 18 11 18L5 18C3.3431 18 2 16.6569 2 15L2 9C2 7.3431 3.3431 6 5 6Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="p-cgzablu"/><path class="bdf4slb9j"/></g>`,
		"fallback": "keyline-icons:image-align-left-two-tone",
	});
}

export default Component;
