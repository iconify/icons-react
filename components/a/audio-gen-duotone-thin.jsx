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
		"content": `<style>.eimg1ibhu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.el0n_ccnv {
  d: path("M8 5v14");
}

.g6ulbfs0a {
  d: path("M15 11h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l517yxbln {
  d: path("M12 9v6");
}

.lbz2yq5no {
  d: path("M4 9v6");
}

.n3lp_o20i {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 11h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n4e83dijt {
  d: path("M18 8v6");
}

.n9a76q-fl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 8v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r63slnb7d {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yh9u2vb-g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="yh9u2vb-g"/><path class="r63slnb7d"/><path class="eimg1ibhu"/><path class="n9a76q-fl"/><path class="n3lp_o20i"/><path class="lbz2yq5no"/><path class="el0n_ccnv"/><path class="l517yxbln"/><path class="n4e83dijt"/><path class="g6ulbfs0a"/></g>`,
		"fallback": "iconmind:audio-gen-duotone-thin",
	});
}

export default Component;
