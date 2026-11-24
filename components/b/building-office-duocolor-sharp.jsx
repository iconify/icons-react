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
		"content": `<style>.ahm-4qgpe {
  stroke-opacity: 0.4;
  d: path("M10 21v-4h4v4");
}

.id7e3mb7k {
  d: path("M4 21V5h16v16M3 21h18M8 9v4m4-4v4m4-4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ahm-4qgpe"/><path class="id7e3mb7k"/></g>`,
		"fallback": "coolicons:building-office-duocolor-sharp",
	});
}

export default Component;
