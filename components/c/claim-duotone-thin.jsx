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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.fx63l30wc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.irg5kslxg {
  d: path("M12 4v3");
}

.j15uiubkt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 12v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ohhz_s35v {
  d: path("M12 12v6");
}

.rcjv44b9n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sgm8b3bpu {
  fill: currentColor;
  d: path("M11 9.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.styxdpaok {
  d: path("M11 9.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.t9gnp4b0n {
  d: path("M3 12a9 9 0 0 1 18 0");
}

.v2mh5_bdn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w-bszmb4l {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 18a2 2 0 0 1 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yb0sj-xar {
  d: path("M12 18a2 2 0 0 1 -4 0");
}
</style><g class="hntgybcog"><path class="sgm8b3bpu"/><path class="rcjv44b9n"/><path class="fx63l30wc"/><path class="j15uiubkt"/><path class="w-bszmb4l"/><path class="v2mh5_bdn"/><path class="t9gnp4b0n"/><path class="ae-e09b3w"/><path class="ohhz_s35v"/><path class="yb0sj-xar"/><path class="irg5kslxg"/><path class="styxdpaok"/></g>`,
		"fallback": "iconmind:claim-duotone-thin",
	});
}

export default Component;
