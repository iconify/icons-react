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
		"content": `<style>.exn1uut0n {
  d: path("M4.5 8.75v-2.5H10v2.5Zm-1.75 0h18.5v3.5H2.75zM8 12.25L16 18m0-5.75L8 18");
}

.osg1l5s9n {
  cx: 8px;
  cy: 19.5px;
  r: 1.5px;
}

.p9owqpkmi {
  cx: 16px;
  cy: 19.5px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="exn1uut0n"/><circle class="osg1l5s9n"/><circle class="p9owqpkmi"/></g>`,
		"fallback": "iconoven:gurney-sharp",
	});
}

export default Component;
