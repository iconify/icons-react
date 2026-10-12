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
		"content": `<style>.k2kjibb3a {
  d: path("m7.5 10l1 1l2-2m2 1h4m-9 4l1 1l2-2m2 1h4m-8.75 3l2 2m0-2l-2 2m4.75-1h4");
}

.kc6zc2bke {
  d: path("M4.25 5.25h15.5v16H4.25zm4.25 0v-2.5h7v2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kc6zc2bke"/><path class="k2kjibb3a"/></g>`,
		"fallback": "iconoven:inspection-clipboard-sharp",
	});
}

export default Component;
