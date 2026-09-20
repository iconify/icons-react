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
		"content": `<style>.ag9m5ebdy {
  d: path("M12 7v13");
}

.jzeve79sx {
  fill: currentColor;
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kbx4e0uoh {
  d: path("M17 15a5 5 0 0 1 -10 0");
}

.l0zc9ibud {
  d: path("M8 10h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sc-ie4bvk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 15a5 5 0 0 1 -10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wog2376vd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 10h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z-6zmuoeb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 7v13");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="jzeve79sx"/><path class="z-6zmuoeb"/><path class="wog2376vd"/><path class="sc-ie4bvk"/><path class="ymw3aibdo"/><path class="ag9m5ebdy"/><path class="l0zc9ibud"/><path class="kbx4e0uoh"/></g>`,
		"fallback": "iconmind:durable-object-duotone-regular",
	});
}

export default Component;
