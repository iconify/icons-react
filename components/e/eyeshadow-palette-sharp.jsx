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
		"content": `<style>.a1q1hpb2a {
  d: path("M5.75 10.75h4.75v6H5.75zm7.75 0h4.75v6H13.5z");
}

.drq731b6w {
  d: path("M2.75 4.25h18.5v15.5H2.75zm0 3.5h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="drq731b6w"/><path class="a1q1hpb2a"/></g>`,
		"fallback": "iconoven:eyeshadow-palette-sharp",
	});
}

export default Component;
