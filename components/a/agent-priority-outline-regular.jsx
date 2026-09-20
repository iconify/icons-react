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
		"content": `<style>.bjz8zacox {
  d: path("M14.11 9.47a5 5 0 1 1 -4.22 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pp3du3b3p {
  d: path("m7 7 5 -5 5 5");
}
</style><g class="nrj6p8qat"><path class="pp3du3b3p"/><path class="bjz8zacox"/></g>`,
		"fallback": "iconmind:agent-priority-outline-regular",
	});
}

export default Component;
