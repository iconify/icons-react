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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iyj_k-bwo {
  d: path("M12 11v4");
}

.nb8rxih9e {
  d: path("M9 21a3 3 0 0 1 6 0");
}

.tuc-wpbfs {
  d: path("M15 21a3 3 0 0 1 6 0");
}

.u8q22mbqe {
  d: path("M9 5a3 3 0 0 1 3 -3 3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3Z");
}

.xo7ududad {
  d: path("M3 21a3 3 0 0 1 6 0");
}
</style><g class="hntgybcog"><path class="u8q22mbqe"/><path class="iyj_k-bwo"/><path class="xo7ududad"/><path class="nb8rxih9e"/><path class="tuc-wpbfs"/></g>`,
		"fallback": "iconmind:concert-outline-thin",
	});
}

export default Component;
