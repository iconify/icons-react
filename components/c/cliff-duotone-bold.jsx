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
		"content": `<style>.a562fv74t {
  d: path("M6 22h12");
}

.c9i9zwf-r {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 3h10v13H3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d5b4fcc2f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ky6ccrb_q {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m13 8 4 4v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rn2_dtbur {
  d: path("M3 3h10v13H3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ubbszwy6j {
  d: path("m13 8 4 4v4");
}

.wotrkdy7x {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 22h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="s0phu2bbs"><path class="c9i9zwf-r"/><path class="ky6ccrb_q"/><path class="d5b4fcc2f"/><path class="wotrkdy7x"/><path class="rn2_dtbur"/><path class="ubbszwy6j"/><path class="z9ittvbis"/><path class="a562fv74t"/></g>`,
		"fallback": "iconmind:cliff-duotone-bold",
	});
}

export default Component;
