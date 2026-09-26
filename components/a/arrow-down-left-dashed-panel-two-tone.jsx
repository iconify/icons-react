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
		"content": `<style>.es1ry8oas {
  stroke-opacity: 0.4;
  d: path("M10.5 3H13.5M21 10.5V13.5M3 7V6C3 4.34315 4.34315 3 6 3M18 3C19.6569 3 21 4.34315 21 6M17 21H18C19.6569 21 21 19.6569 21 18");
}

.gp0bdx8ih {
  d: path("M3 11.5V20.5C3 20.7761 3.22386 21 3.5 21H12.5M3.5 20.5L12.5 11.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="es1ry8oas"/><path class="gp0bdx8ih"/></g>`,
		"fallback": "keyline-icons:arrow-down-left-dashed-panel-two-tone",
	});
}

export default Component;
