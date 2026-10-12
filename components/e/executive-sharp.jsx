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
		"content": `<style>.cv_7_4bvk {
  cx: 12px;
  cy: 6.25px;
  r: 3.25px;
}

.hpbo1obua {
  d: path("M7.25 16.25H17.5v-.75c0-2.03-2.53-3.5-5.5-3.5s-5.5 1.47-5.5 3.5v.75zm-4.5 0h18.5v5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="cv_7_4bvk"/><path class="hpbo1obua"/></g>`,
		"fallback": "iconoven:executive-sharp",
	});
}

export default Component;
