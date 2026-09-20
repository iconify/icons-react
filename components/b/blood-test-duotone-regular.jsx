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
		"content": `<style>.j4a3yvbid {
  d: path("m12 9 3 3a4 4 0 0 1 -6 0Z");
}

.k5hu3qbal {
  fill: currentColor;
  d: path("m12 9 3 3a4 4 0 0 1 -6 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.va9i39bae {
  d: path("M7 3h10");
}

.x2vm1eh6r {
  d: path("M9 3v15h6V3");
}
</style><g class="nrj6p8qat"><path class="k5hu3qbal"/><path class="x2vm1eh6r"/><path class="va9i39bae"/><path class="j4a3yvbid"/></g>`,
		"fallback": "iconmind:blood-test-duotone-regular",
	});
}

export default Component;
