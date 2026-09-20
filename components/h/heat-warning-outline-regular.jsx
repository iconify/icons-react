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

.u3s-f_buj {
  d: path("M8.5 14a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.uweslxo3x {
  d: path("M12 3.5 21.5 20h-19Z");
}
</style><g class="nrj6p8qat"><path class="uweslxo3x"/><path class="u3s-f_buj"/></g>`,
		"fallback": "iconmind:heat-warning-outline-regular",
	});
}

export default Component;
