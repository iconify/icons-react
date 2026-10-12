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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.t4ul9t_nl {
  d: path("M12 12a.75.75 0 0 1 1.5 0A2.25 2.25 0 0 1 9 12a3.75 3.75 0 0 1 7.5 0A5.25 5.25 0 0 1 6 12");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="t4ul9t_nl"/></g>`,
		"fallback": "iconoven:cinnamon-roll-sharp",
	});
}

export default Component;
