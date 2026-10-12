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
		"content": `<style>.fbfyvgbuo {
  cx: 12px;
  cy: 9.25px;
  r: 4.15px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jl4903ezj {
  cx: 12px;
  cy: 9.25px;
  r: 6.5px;
}

.nid46bcbk {
  d: path("M12 15.75v5.5m-4 0l4-2.75l4 2.75");
}

.o_v_subpw {
  width: 3px;
  height: 3px;
  x: 10.5px;
  y: 7.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><circle class="jl4903ezj"/><circle class="fbfyvgbuo"/><rect class="o_v_subpw"/><path class="nid46bcbk"/></g>`,
		"fallback": "iconoven:creator-studio",
	});
}

export default Component;
