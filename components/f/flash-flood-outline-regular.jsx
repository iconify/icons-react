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
		"content": `<style>.kry_r4p8f {
  d: path("m3 20 2.5 -2.5L8 20l2.5 -2.5L13 20l2.5 -2.5L18 20l2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xr4pgs06d {
  d: path("m3 15 2.5 -2.5L8 15l2.5 -2.5L13 15l2.5 -2.5L18 15l2.5 -2.5");
}

.zmjbj80iu {
  d: path("M13.5 4 11 6.5h2.5L11 9");
}
</style><g class="nrj6p8qat"><path class="zmjbj80iu"/><path class="xr4pgs06d"/><path class="kry_r4p8f"/></g>`,
		"fallback": "iconmind:flash-flood-outline-regular",
	});
}

export default Component;
