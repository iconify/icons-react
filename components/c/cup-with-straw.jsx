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
		"content": `<style>.p3gwist-g {
  d: path("M12 7V4l3-1.5");
}

.u4ixodbit {
  d: path("m7 11l1.5 10.5h7L17 11M6 11a6 4 0 0 1 12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u4ixodbit"/><path class="p3gwist-g"/></g>`,
		"fallback": "uix-sharp:cup-with-straw",
	});
}

export default Component;
