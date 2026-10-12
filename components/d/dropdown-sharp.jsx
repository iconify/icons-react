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
		"content": `<style>.ai5_01mqz {
  d: path("m15.75 5.5l1.5 1.5l1.5-1.5M6 6.25h5.5m-8.75 5.5h18.5v9H2.75zM6 15h9m-9 3h6");
}

.evy345wtm {
  d: path("M2.75 3.25h18.5v6H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="evy345wtm"/><path class="ai5_01mqz"/></g>`,
		"fallback": "iconoven:dropdown-sharp",
	});
}

export default Component;
