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

.ihh3idyew {
  d: path("M15 8v5");
}

.k8jcztb-g {
  d: path("M4 13v7h16v-7Z");
}

.t_-p3gl9a {
  d: path("M8 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.u4sowhi7h {
  d: path("M4 16h16");
}

.v85yu_66d {
  d: path("M9 8v5");
}

.zfnkrabzj {
  d: path("M14 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="k8jcztb-g"/><path class="u4sowhi7h"/><path class="v85yu_66d"/><path class="ihh3idyew"/><path class="t_-p3gl9a"/><path class="zfnkrabzj"/></g>`,
		"fallback": "iconmind:birthday-cake-outline-thin",
	});
}

export default Component;
