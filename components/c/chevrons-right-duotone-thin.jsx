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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nzskk0_bm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13 4 8 8 -8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pnu4jvbcb {
  d: path("m13 4 8 8 -8 8");
}

.qenf55b9u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 4 8 8 -8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.te2cn0btr {
  d: path("m4 4 8 8 -8 8");
}
</style><g class="hntgybcog"><path class="qenf55b9u"/><path class="nzskk0_bm"/><path class="te2cn0btr"/><path class="pnu4jvbcb"/></g>`,
		"fallback": "iconmind:chevrons-right-duotone-thin",
	});
}

export default Component;
