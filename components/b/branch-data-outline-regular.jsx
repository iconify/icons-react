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
		"content": `<style>.db6bvvb_j {
  d: path("M16 16a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.fz6e7vbzb {
  d: path("M5 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u42rpbb1t {
  d: path("M6 12h12v3");
}

.wc595gblk {
  d: path("M4 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="ftqzjnb8u"/><path class="wc595gblk"/><path class="db6bvvb_j"/><path class="u42rpbb1t"/><path class="fz6e7vbzb"/></g>`,
		"fallback": "iconmind:branch-data-outline-regular",
	});
}

export default Component;
