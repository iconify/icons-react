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
		"content": `<style>.cg8aoikwp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 7h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dmpyxbc1s {
  d: path("M7 7h12");
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mol-ojbtj {
  d: path("m7 17 8 -8");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.q0qsy9ics {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 17 8 -8");
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
</style><g class="s0phu2bbs"><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="cg8aoikwp"/><path class="q0qsy9ics"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="dmpyxbc1s"/><path class="mol-ojbtj"/></g>`,
		"fallback": "iconmind:capacity-plan-duotone-bold",
	});
}

export default Component;
