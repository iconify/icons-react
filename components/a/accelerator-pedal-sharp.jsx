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
		"content": `<style>.r503y7brq {
  d: path("M8 2.75h8V18.5H8zm-2.5 18.5h13M12 18.5v2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zu20fmbbg {
  d: path("M10.25 12.5L12 7.75l1.75 4.75m-3-1.5h2.5m-3 4.25h3.5");
}
</style><g class="x2cwu0gfd"><path class="r503y7brq"/><path class="zu20fmbbg"/></g>`,
		"fallback": "iconoven:accelerator-pedal-sharp",
	});
}

export default Component;
