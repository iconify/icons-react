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
		"content": `<style>.b7uyqxwtl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d3f-rpbhx {
  d: path("M5 9h6");
}

.f_qnzabbp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 9h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.t50gefbni {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 15.5h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yh3czw4qv {
  d: path("M13 15.5h6");
}
</style><g class="hntgybcog"><path class="b7uyqxwtl"/><path class="f_qnzabbp"/><path class="t50gefbni"/><path class="ky4omnbla"/><path class="d3f-rpbhx"/><path class="yh3czw4qv"/></g>`,
		"fallback": "iconmind:cheque-duotone-thin",
	});
}

export default Component;
