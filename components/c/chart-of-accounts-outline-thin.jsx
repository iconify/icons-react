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
		"content": `<style>.a2e335b1o {
  d: path("M11 10h5");
}

.aq_yi4bjn {
  d: path("M11 17h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u3j9ehbvp {
  d: path("M11 13.5h5");
}

.wp75hkmty {
  d: path("M11 7v10");
}

.wuvisubmw {
  d: path("M8 3v18");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="y4_6s7b5v"/><path class="wuvisubmw"/><path class="wp75hkmty"/><path class="a2e335b1o"/><path class="u3j9ehbvp"/><path class="aq_yi4bjn"/></g>`,
		"fallback": "iconmind:chart-of-accounts-outline-thin",
	});
}

export default Component;
