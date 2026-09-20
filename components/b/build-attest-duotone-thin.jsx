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
		"content": `<style>.b0hkzgbgd {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hee6_gbza {
  d: path("M9 7h6v3l-3 3 -3 -3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kysn4r6df {
  fill: currentColor;
  d: path("M9 7h6v3l-3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nzpfjab_r {
  fill: currentColor;
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wuk2mlziz {
  d: path("M7 19h10");
}
</style><g class="hntgybcog"><path class="nzpfjab_r"/><path class="kysn4r6df"/><path class="b0hkzgbgd"/><path class="hee6_gbza"/><path class="wuk2mlziz"/></g>`,
		"fallback": "iconmind:build-attest-duotone-thin",
	});
}

export default Component;
