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
		"content": `<style>.jld273cnz {
  fill: currentColor;
  d: path("M3 12a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ngog6l_tc {
  fill: currentColor;
  d: path("M7 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tkahp9b1r {
  d: path("M3 12a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.vokybza2s {
  d: path("M7 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.xbdh32u_w {
  d: path("M17 12h4v7");
}
</style><g class="nrj6p8qat"><path class="jld273cnz"/><path class="ngog6l_tc"/><path class="tkahp9b1r"/><path class="vokybza2s"/><path class="xbdh32u_w"/></g>`,
		"fallback": "iconmind:bandage-duotone-regular",
	});
}

export default Component;
