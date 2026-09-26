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
		"content": `<style>.aewu89bmt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 5H15C17.20914 5 19 6.79086 19 9V15C19 17.20914 17.20914 19 15 19H5C2.79086 19 1 17.20914 1 15V9C1 6.79086 2.79086 5 5 5Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pg59ru96m {
  d: path("M5 6H15C16.65685 6 18 7.34315 18 9V15C18 16.65685 16.65685 18 15 18H5C3.34315 18 2 16.65685 2 15V9C2 7.34315 3.34315 6 5 6ZM22 9.5V14.5");
}
</style><g class="nrj6p8qat"><path class="aewu89bmt"/><path class="pg59ru96m"/></g>`,
		"fallback": "keyline-icons:battery-two-tone",
	});
}

export default Component;
