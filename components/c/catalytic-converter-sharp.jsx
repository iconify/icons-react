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
		"content": `<style>.h3_frbcod {
  d: path("M3.5 10.75H6l.35-.66l1.3-2.43L8 7h8l.35.66l1.3 2.43l.35.66h3.25v2.5H18l-.35.66l-1.3 2.43L16 17H8l-.35-.66l-1.3-2.43l-.35-.66H2.75v-2.5z");
}

.wccd07bsz {
  d: path("M9.5 9.75h5v4.5h-5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h3_frbcod"/><path class="wccd07bsz"/></g>`,
		"fallback": "iconoven:catalytic-converter-sharp",
	});
}

export default Component;
