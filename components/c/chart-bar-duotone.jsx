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
		"content": `<style>.h941x5bvy {
  d: path("M7 7L16 7M7 12L13 12M7 17L19 17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x9emg4bdv {
  stroke-opacity: 0.4;
  d: path("M3 3L3 19C3 20.1046 3.8954 21 5 21L21 21");
}
</style><g class="nrj6p8qat"><path class="x9emg4bdv"/><path class="h941x5bvy"/></g>`,
		"fallback": "keyline-icons:chart-bar-duotone",
	});
}

export default Component;
