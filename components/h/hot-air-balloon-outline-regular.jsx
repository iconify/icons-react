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
		"content": `<style>.mqi2_ac9e {
  d: path("M9.5 15.5 12 18l2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r8vbx7bdh {
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9");
}

.s42i69yya {
  d: path("M9.5 18v3.5h5V18Z");
}
</style><g class="nrj6p8qat"><path class="r8vbx7bdh"/><path class="mqi2_ac9e"/><path class="s42i69yya"/></g>`,
		"fallback": "iconmind:hot-air-balloon-outline-regular",
	});
}

export default Component;
