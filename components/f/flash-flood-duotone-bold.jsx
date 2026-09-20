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
		"content": `<style>.e7rvj549s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 15 2.5 -2.5L8 15l2.5 -2.5L13 15l2.5 -2.5L18 15l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kry_r4p8f {
  d: path("m3 20 2.5 -2.5L8 20l2.5 -2.5L13 20l2.5 -2.5L18 20l2.5 -2.5");
}

.opw7blv_u {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m3 20 2.5 -2.5L8 20l2.5 -2.5L13 20l2.5 -2.5L18 20l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pk71tebzc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13.5 4 11 6.5h2.5L11 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xr4pgs06d {
  d: path("m3 15 2.5 -2.5L8 15l2.5 -2.5L13 15l2.5 -2.5L18 15l2.5 -2.5");
}

.zmjbj80iu {
  d: path("M13.5 4 11 6.5h2.5L11 9");
}
</style><g class="s0phu2bbs"><path class="pk71tebzc"/><path class="e7rvj549s"/><path class="opw7blv_u"/><path class="zmjbj80iu"/><path class="xr4pgs06d"/><path class="kry_r4p8f"/></g>`,
		"fallback": "iconmind:flash-flood-duotone-bold",
	});
}

export default Component;
