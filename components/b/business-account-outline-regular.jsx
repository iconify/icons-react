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
		"content": `<style>.hco_o0b5n {
  d: path("M9 14h6v4H9Z");
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vadimgloz {
  d: path("M10 14a2 2 0 0 1 4 0");
}
</style><g class="nrj6p8qat"><path class="mcubrkb2y"/><path class="hco_o0b5n"/><path class="vadimgloz"/></g>`,
		"fallback": "iconmind:business-account-outline-regular",
	});
}

export default Component;
