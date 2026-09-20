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
		"content": `<style>.czeeg8b5o {
  d: path("M5 18.5A2.5 2.5 0 0 1 7.5 16h9a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-9A2.5 2.5 0 0 1 5 18.5");
}

.hqoi59sxr {
  d: path("M12 9v7");
}

.j7rvusv0t {
  d: path("m12 9 5 -5");
}

.nb_m0nb2i {
  d: path("M12 9 7 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hqoi59sxr"/><path class="nb_m0nb2i"/><path class="j7rvusv0t"/><path class="czeeg8b5o"/></g>`,
		"fallback": "iconmind:freshness-outline-regular",
	});
}

export default Component;
