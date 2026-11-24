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
		"content": `<style>.g5s6ahb7t {
  d: path("M8 21H4V10l8-7l5.714 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zn1f4bb2f {
  stroke-opacity: 0.4;
  d: path("M15.5 16.5a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5 0h.5m-1.672 2.828l.354.354M16.5 20.5v.5m-2.828-1.672l-.354.354M12.5 16.5H12m1.672-2.828l-.354-.354M16.5 12.5V12m2.828 1.672l.354-.354");
}
</style><g class="nrj6p8qat"><path class="zn1f4bb2f"/><path class="g5s6ahb7t"/></g>`,
		"fallback": "coolicons:house-sun-corner-duocolor-sharp",
	});
}

export default Component;
