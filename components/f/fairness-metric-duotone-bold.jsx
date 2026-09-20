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
		"content": `<style>.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ht31bh1tn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 10v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ndyoa79lx {
  d: path("M9 10v8");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.osgbu27qg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 10v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w706_-bdv {
  d: path("M15 10v8");
}
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="ht31bh1tn"/><path class="osgbu27qg"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="ndyoa79lx"/><path class="w706_-bdv"/></g>`,
		"fallback": "iconmind:fairness-metric-duotone-bold",
	});
}

export default Component;
