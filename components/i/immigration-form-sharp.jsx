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
		"content": `<style>.hmi_qewqf {
  d: path("M8.25 16h7M13 13.75L15.25 16L13 18.25");
}

.iiqlhmbpr {
  d: path("M4.75 2.75h14.5v18.5H4.75zm3.5 4h1.5m2 0h4M8.25 10h1.5m2 0h4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="iiqlhmbpr"/><path class="hmi_qewqf"/></g>`,
		"fallback": "iconoven:immigration-form-sharp",
	});
}

export default Component;
