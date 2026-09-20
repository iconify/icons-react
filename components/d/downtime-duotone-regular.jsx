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
		"content": `<style>.hen7e0d7r {
  d: path("M3 12h4V6h4v12h4v-6h6");
}

.hfamg6bvp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h4V6h4v12h4v-6h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hfamg6bvp"/><path class="hen7e0d7r"/></g>`,
		"fallback": "iconmind:downtime-duotone-regular",
	});
}

export default Component;
