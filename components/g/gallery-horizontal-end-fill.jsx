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

.p_ubm5blj {
  d: path("M7 5V19M3 7V17");
}

.ym2fiubju {
  fill: currentColor;
  d: path("M13 2L19 2C20.65685 2 22 3.34315 22 5L22 19C22 20.65685 20.65685 22 19 22L13 22C11.34315 22 10 20.65685 10 19L10 5C10 3.34315 11.34315 2 13 2Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="ym2fiubju"/><path class="p_ubm5blj"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-end-fill",
	});
}

export default Component;
