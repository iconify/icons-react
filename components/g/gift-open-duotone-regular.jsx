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
		"content": `<style>.dvdnlhq9o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 10h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ege_q3bkn {
  d: path("m8 5 2 -2");
}

.i7iskytip {
  d: path("m13 6 3 -3");
}

.irf6xy5kk {
  d: path("M5 13v8h14v-8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t72b2hbgm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 5 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ut3orfvdk {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m13 6 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x50q_4bdr {
  d: path("M3 10h18");
}

.xe_wdmbex {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 13v8h14v-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="xe_wdmbex"/><path class="dvdnlhq9o"/><path class="ut3orfvdk"/><path class="t72b2hbgm"/><path class="irf6xy5kk"/><path class="x50q_4bdr"/><path class="i7iskytip"/><path class="ege_q3bkn"/></g>`,
		"fallback": "iconmind:gift-open-duotone-regular",
	});
}

export default Component;
