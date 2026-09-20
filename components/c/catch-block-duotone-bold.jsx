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
		"content": `<style>.d-zgcbbzy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 3v2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f-52c6b3g {
  d: path("M4 10v10h16V10");
}

.p7air0nan {
  fill: currentColor;
  d: path("M11 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rr985ibot {
  d: path("M12 3v2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v7xfanbfw {
  d: path("M11 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.x9vxhbcxr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 10v10h16V10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="p7air0nan"/><path class="x9vxhbcxr"/><path class="d-zgcbbzy"/><path class="f-52c6b3g"/><path class="rr985ibot"/><path class="v7xfanbfw"/></g>`,
		"fallback": "iconmind:catch-block-duotone-bold",
	});
}

export default Component;
