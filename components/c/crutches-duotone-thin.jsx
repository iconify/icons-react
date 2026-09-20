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
		"content": `<style>.bhj229bdw {
  d: path("M14 4h6");
}

.cb744t15v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 4h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fa77bsbgi {
  d: path("M4 10h6");
}

.h92jsubbt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 4v17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.py87sqk9l {
  d: path("M7 4v17");
}

.s52atmbas {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 10h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.suz0t0a-u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 10h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tdty7q1qv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 4v17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tj33frbke {
  d: path("M17 4v17");
}

.w2atjyb_m {
  d: path("M14 10h6");
}

.xauzxyh2s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yfvv4yzsv {
  d: path("M4 4h6");
}
</style><g class="hntgybcog"><path class="xauzxyh2s"/><path class="tdty7q1qv"/><path class="s52atmbas"/><path class="cb744t15v"/><path class="h92jsubbt"/><path class="suz0t0a-u"/><path class="yfvv4yzsv"/><path class="py87sqk9l"/><path class="fa77bsbgi"/><path class="bhj229bdw"/><path class="tj33frbke"/><path class="w2atjyb_m"/></g>`,
		"fallback": "iconmind:crutches-duotone-thin",
	});
}

export default Component;
