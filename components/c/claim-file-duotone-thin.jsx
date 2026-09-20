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

.fobf5jwcl {
  d: path("m9.5 10 5 -5");
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

.io5gq-dfx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9.5 10 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.t9gnp4b0n {
  d: path("M3 12a9 9 0 0 1 18 0");
}

.w-bszmb4l {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 18a2 2 0 0 1 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yb0sj-xar {
  d: path("M12 18a2 2 0 0 1 -4 0");
}
</style><g class="hntgybcog"><path class="rcjv44b9n"/><path class="fx63l30wc"/><path class="j15uiubkt"/><path class="w-bszmb4l"/><path class="io5gq-dfx"/><path class="t9gnp4b0n"/><path class="ae-e09b3w"/><path class="ohhz_s35v"/><path class="yb0sj-xar"/><path class="fobf5jwcl"/></g>`,
		"fallback": "iconmind:claim-file-duotone-thin",
	});
}

export default Component;
