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
		"content": `<style>.g0cbdgbgj {
  cx: 9.25px;
  cy: 14.75px;
  r: 6.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xv1gp_tin {
  cx: 9.25px;
  cy: 14.75px;
  r: 3.25px;
}

.y_70syb0m {
  d: path("M9.25 5.75a6.5 6.5 0 1 1 9 9");
}
</style><g class="x2cwu0gfd"><path class="y_70syb0m"/><circle class="g0cbdgbgj"/><circle class="xv1gp_tin"/></g>`,
		"fallback": "iconoven:coin-receive-sharp",
	});
}

export default Component;
