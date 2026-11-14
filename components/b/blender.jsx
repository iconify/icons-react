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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.myo-452in {
  d: path("M7 5c0-2.5 10-2.5 10 0Z");
}

.qtulb6-lw {
  d: path("M8.771 5h6.458a1.5 1.5 0 0 1 1.48 1.747l-1 6A1.5 1.5 0 0 1 14.229 14H9.771a1.5 1.5 0 0 1-1.48-1.253l-1-6A1.5 1.5 0 0 1 8.771 5");
}

.u2ax36b8o {
  d: path("M9.125 14h5.75a2.625 2.625 0 0 1 2.625 2.625v2.25a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 6.5 18.875v-2.25A2.625 2.625 0 0 1 9.125 14M12 17.75h.01");
}
</style><g class="hntgybcog"><path class="myo-452in"/><path class="qtulb6-lw"/><path class="u2ax36b8o"/></g>`,
		"fallback": "uix:blender",
	});
}

export default Component;
