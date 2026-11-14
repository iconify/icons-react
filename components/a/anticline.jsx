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
		"content": `<style>.dxazypbqx {
  d: path("M10.5 19.5c0-9 3-9 3 0m-11 0h19");
}

.f15d-ccoo {
  d: path("M6.5 19.5c0-14.5 11-14.5 11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oh350n3eh {
  d: path("M2.5 19.5c0-19.5 19-19.5 19 0");
}
</style><g class="hntgybcog"><path class="oh350n3eh"/><path class="f15d-ccoo"/><path class="dxazypbqx"/></g>`,
		"fallback": "uix:anticline",
	});
}

export default Component;
