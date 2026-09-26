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
		"content": `<style>.eg1tj-bbg {
  d: path("M2 4L2 20M22 16L22 20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zf3petj-g {
  fill: currentColor;
  d: path("M1 17L1 9L5 9L5 7C5 5.3431 6.3431 4 8 4L10 4C11.6569 4 13 5.3431 13 7L13 9L19 9C21.2091 9 23 10.7909 23 13L23 17L1 17ZM7 9L11 9L11 7C11 6.4477 10.5523 6 10 6L8 6C7.4477 6 7 6.4477 7 7L7 9Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zf3petj-g"/><path class="eg1tj-bbg"/></g>`,
		"fallback": "keyline-icons:bed-fill",
	});
}

export default Component;
