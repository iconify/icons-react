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
		"content": `<style>.dpr_gnqpq {
  d: path("m14.5 14.5 4 -4");
}

.h0hlbvfqt {
  d: path("M15.5 10.5h3v3");
}

.mi7pnccmc {
  d: path("M6 10v4");
}

.murw5tb-p {
  d: path("M2 9a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="murw5tb-p"/><path class="mi7pnccmc"/><path class="dpr_gnqpq"/><path class="h0hlbvfqt"/></g>`,
		"fallback": "iconmind:composer-outline-regular",
	});
}

export default Component;
