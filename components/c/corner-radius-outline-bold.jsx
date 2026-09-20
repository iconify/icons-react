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
		"content": `<style>.ben7bq53u {
  d: path("M4 10a6 6 0 0 1 6 -6");
}

.kr1cz4b8j {
  d: path("M9 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s-etibjpa {
  d: path("M4 10v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xr2p35g3w {
  d: path("M10 4h10");
}
</style><g class="s0phu2bbs"><path class="s-etibjpa"/><path class="ben7bq53u"/><path class="xr2p35g3w"/><path class="kr1cz4b8j"/></g>`,
		"fallback": "iconmind:corner-radius-outline-bold",
	});
}

export default Component;
