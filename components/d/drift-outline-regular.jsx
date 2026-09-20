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
		"content": `<style>.f33exibub {
  d: path("M3 12h9l6 -6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sj9rw9tzk {
  d: path("m12 12 6 6");
}
</style><g class="nrj6p8qat"><path class="f33exibub"/><path class="sj9rw9tzk"/></g>`,
		"fallback": "iconmind:drift-outline-regular",
	});
}

export default Component;
