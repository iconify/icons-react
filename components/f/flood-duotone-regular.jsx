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
		"content": `<style>.fcnh_acnz {
  d: path("m3 19 2.5 -2.5L8 19l2.5 -2.5L13 19l2.5 -2.5L18 19l2.5 -2.5");
}

.g1lzf8brc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 19 2.5 -2.5L8 19l2.5 -2.5L13 19l2.5 -2.5L18 19l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lgw6hdcbc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 11v5h10v-5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pzm21jb5s {
  d: path("M7 11v5h10v-5");
}

.s6795lb_y {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m5 11 7 -7 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wlpa9-b1f {
  d: path("m5 11 7 -7 7 7");
}
</style><g class="nrj6p8qat"><path class="s6795lb_y"/><path class="lgw6hdcbc"/><path class="g1lzf8brc"/><path class="wlpa9-b1f"/><path class="pzm21jb5s"/><path class="fcnh_acnz"/></g>`,
		"fallback": "iconmind:flood-duotone-regular",
	});
}

export default Component;
