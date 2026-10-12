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
		"content": `<style>.a--6r5bye {
  d: path("M5.5 11h5v5h-5zm5 0l6.25-4m0-4.25h4.5v4.5h-4.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfs9m9b1j {
  d: path("M2.75 8.25h13v13h-13z");
}
</style><g class="x2cwu0gfd"><path class="zfs9m9b1j"/><path class="a--6r5bye"/></g>`,
		"fallback": "iconoven:convolution-sharp",
	});
}

export default Component;
