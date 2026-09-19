import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kckd8cb2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.806 30.577s-.698 3.955 2.012 6.345c2.643 2.332 8.09 2.264 10.444-.309c1.9-2.076 2.31-6.24-.476-8.439S26.05 20.692 26.05 20.692");
}

.ohbjtwb6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.503 9.39A9.48 9.48 0 0 1 24 18.163c-3.77 0-1.92 10.563 0 14.45");
}

.r4kvz-u8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.91 18.422s4.113-7.086 11.538-8.786s8.251 6.496 5.846 10.27s-5.081 6.303-8.642 5.975");
}

.ug9wiib-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.09 18.422s-4.113-7.086-11.538-8.786s-8.251 6.496-5.846 10.27s5.081 6.303 8.642 5.975");
}

.yu66svyut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.194 30.577s.698 3.955-2.012 6.345c-2.643 2.332-8.09 2.264-10.444-.309c-1.9-2.076-2.31-6.24.476-8.439s10.735-7.482 10.735-7.482M29.497 9.39A9.48 9.48 0 0 0 24 18.163c3.77 0 1.92 10.563 0 14.45");
}
</style><path class="ohbjtwb6r"/><path class="ug9wiib-e"/><path class="yu66svyut"/><path class="r4kvz-u8r"/><path class="kckd8cb2u"/>`,
		"fallback": "arcticons:freeprints",
	});
}

export default Component;
