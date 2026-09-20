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
		"content": `<style>.avdamgajo {
  d: path("M6 21a6 6 0 0 1 12 0");
}

.jds7y1b0v {
  d: path("M7 8a1.5 1.5 0 0 1 1.5 -1.5h7A1.5 1.5 0 0 1 17 8a1.5 1.5 0 0 1 -1.5 1.5h-7A1.5 1.5 0 0 1 7 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ufzn_r3vk {
  d: path("M9 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="ufzn_r3vk"/><path class="avdamgajo"/><path class="jds7y1b0v"/></g>`,
		"fallback": "iconmind:anonymise-outline-regular",
	});
}

export default Component;
