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
		"content": `<style>.e6673eoyj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10.5 13.5 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e9i5dwbzy {
  d: path("m10.5 13.5 3 -3");
}

.geynzzbhp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 12a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mddrthmzf {
  d: path("M3 16a4 4 0 0 1 8 0");
}

.rq5svzstd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 16a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xa0iemevq {
  d: path("M13 12a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="rq5svzstd"/><path class="geynzzbhp"/><path class="e6673eoyj"/><path class="mddrthmzf"/><path class="xa0iemevq"/><path class="e9i5dwbzy"/></g>`,
		"fallback": "iconmind:distribution-shift-duotone-thin",
	});
}

export default Component;
