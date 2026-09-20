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
		"content": `<style>.a6mnjib5x {
  d: path("M3 10h4");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.l8vricc3a {
  d: path("M17 10h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t8troqb7m {
  d: path("m10 9 2 2 2 -2");
}

.yngda3bvc {
  d: path("M3 15h18");
}
</style><g class="nrj6p8qat"><path class="k6nj2fbya"/><path class="a6mnjib5x"/><path class="l8vricc3a"/><path class="t8troqb7m"/><path class="yngda3bvc"/></g>`,
		"fallback": "iconmind:backfill-data-outline-regular",
	});
}

export default Component;
