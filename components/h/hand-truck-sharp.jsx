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
		"content": `<style>.vx_udecja {
  d: path("M10 7.25h9.75v10H10zm4.75 0v3.25");
}

.w9u-7prwp {
  d: path("M3.25 3.5h2.5v13.75h15.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z6cqk8a1b {
  cx: 8.5px;
  cy: 19px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><path class="w9u-7prwp"/><path class="vx_udecja"/><circle class="z6cqk8a1b"/></g>`,
		"fallback": "iconoven:hand-truck-sharp",
	});
}

export default Component;
