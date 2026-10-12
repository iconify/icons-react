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
		"content": `<style>.aj_x5rb7x {
  d: path("M8.75 17.25a3.25 3.25 0 0 1 6.5 0Z");
}

.e1kirebct {
  d: path("M6 5.25h12v16H6zm4.25 0v-2.5h3.5v2.5");
}

.ja6jjxzuf {
  cx: 12px;
  cy: 9.75px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e1kirebct"/><circle class="ja6jjxzuf"/><path class="aj_x5rb7x"/></g>`,
		"fallback": "iconoven:access-card-sharp",
	});
}

export default Component;
