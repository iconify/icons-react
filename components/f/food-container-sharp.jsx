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
		"content": `<style>.dcraqhbry {
  d: path("M5.25 9.75h15l-.18 1.49l-.89 7.52l-.18 1.49H5l-.18-1.49l-.89-7.52l-.18-1.49zM7.5 14.5h9");
}

.fwsmsacfb {
  d: path("M2.75 5.75h18.5v4H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fwsmsacfb"/><path class="dcraqhbry"/></g>`,
		"fallback": "iconoven:food-container-sharp",
	});
}

export default Component;
