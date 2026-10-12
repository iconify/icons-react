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
		"content": `<style>.fze9urbic {
  d: path("M17.25 2.75v.5m4 3.75h-.5m-3.5 4.25v-.5m-4-3.75h.5");
}

.joko_go6x {
  cx: 17.25px;
  cy: 7px;
  r: 2px;
}

.rltst1-qg {
  d: path("M5.75 13.55V5.5a2.5 2.5 0 0 1 5 0v8.05a4.25 4.25 0 1 1-5 0ZM8.25 17V8.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rltst1-qg"/><circle class="joko_go6x"/><path class="fze9urbic"/></g>`,
		"fallback": "iconoven:climate-sharp",
	});
}

export default Component;
