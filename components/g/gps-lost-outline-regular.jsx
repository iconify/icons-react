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
		"content": `<style>.c438ceftc {
  d: path("M12 17v5");
}

.e69i7fcek {
  d: path("M17 12h5");
}

.l8unaacgj {
  d: path("M2 12h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q3srlnbfr {
  d: path("M12 2v5");
}

.u363cab-y {
  d: path("M5 19 19 5");
}

.zey5ebc0a {
  d: path("M7 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}
</style><g class="nrj6p8qat"><path class="zey5ebc0a"/><path class="q3srlnbfr"/><path class="c438ceftc"/><path class="l8unaacgj"/><path class="e69i7fcek"/><path class="u363cab-y"/></g>`,
		"fallback": "iconmind:gps-lost-outline-regular",
	});
}

export default Component;
