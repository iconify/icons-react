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

.qi3i_ebew {
  cx: 15.25px;
  cy: 12px;
  r: 2.5px;
}

.wozrn6byu {
  d: path("M10.52 10.23a2.5 2.5 0 1 0 0 3.54");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="wozrn6byu"/><circle class="qi3i_ebew"/></g>`,
		"fallback": "iconoven:carbon-monoxide-alarm-sharp",
	});
}

export default Component;
