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

.tcjy62b_y {
  fill: currentColor;
  d: path("M5 5H15C17.20914 5 19 6.79086 19 9V15C19 17.20914 17.20914 19 15 19H5C2.79086 19 1 17.20914 1 15V9C1 6.79086 2.79086 5 5 5Z");
  stroke: none;
}

.vwx95215b {
  d: path("M22 9.5V14.5");
}
</style><g class="nrj6p8qat"><path class="tcjy62b_y"/><path class="vwx95215b"/></g>`,
		"fallback": "keyline-icons:battery-fill",
	});
}

export default Component;
