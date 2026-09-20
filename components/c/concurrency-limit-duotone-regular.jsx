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
		"content": `<style>.bj2hlhbfp {
  d: path("M3 12h12");
}

.ds_qvubnl {
  d: path("M19 3v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q8uu2_b1b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ugv0mtd4a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w03o55b0h {
  d: path("M3 19h12");
}

.wabxj5bqr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 5h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yv4rtvpor {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 19h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z5jtjknvm {
  d: path("M3 5h12");
}
</style><g class="nrj6p8qat"><path class="wabxj5bqr"/><path class="ugv0mtd4a"/><path class="yv4rtvpor"/><path class="q8uu2_b1b"/><path class="z5jtjknvm"/><path class="bj2hlhbfp"/><path class="w03o55b0h"/><path class="ds_qvubnl"/></g>`,
		"fallback": "iconmind:concurrency-limit-duotone-regular",
	});
}

export default Component;
