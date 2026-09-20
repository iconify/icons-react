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

.j569280wv {
  d: path("M3 12h5l6 -6h7");
}

.ldxs-ebdf {
  d: path("M8 12h13");
}

.lpowjlbtz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 12h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nw4ailyfn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 12 6 6h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wi7x4ut7l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h5l6 -6h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="wi7x4ut7l"/><path class="lpowjlbtz"/><path class="nw4ailyfn"/><path class="j569280wv"/><path class="ldxs-ebdf"/><path class="ege_vlbjp"/></g>`,
		"fallback": "iconmind:beam-search-duotone-regular",
	});
}

export default Component;
