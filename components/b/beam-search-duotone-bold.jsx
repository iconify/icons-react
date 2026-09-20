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
		"content": `<style>.ege_vlbjp {
  d: path("m8 12 6 6h7");
}

.gvtuyobtv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h5l6 -6h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j569280wv {
  d: path("M3 12h5l6 -6h7");
}

.ldxs-ebdf {
  d: path("M8 12h13");
}

.mb33-bb6j {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 12 6 6h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.siulgib_a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 12h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="gvtuyobtv"/><path class="siulgib_a"/><path class="mb33-bb6j"/><path class="j569280wv"/><path class="ldxs-ebdf"/><path class="ege_vlbjp"/></g>`,
		"fallback": "iconmind:beam-search-duotone-bold",
	});
}

export default Component;
