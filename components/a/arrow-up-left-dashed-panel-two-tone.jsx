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

.ox4vw9b1w {
  stroke-opacity: 0.4;
  d: path("M10.5 21H13.5M21 13.5V10.5M3 17V18C3 19.6569 4.34315 21 6 21M18 21C19.6569 21 21 19.6569 21 18M17 3H18C19.6569 3 21 4.34315 21 6");
}

.qmag20bip {
  d: path("M12.5 12.5L3.5 3.5M3 12.5V3.5C3 3.22386 3.22386 3 3.5 3H12.5");
}
</style><g class="nrj6p8qat"><path class="ox4vw9b1w"/><path class="qmag20bip"/></g>`,
		"fallback": "keyline-icons:arrow-up-left-dashed-panel-two-tone",
	});
}

export default Component;
