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
		"content": `<style>.ki7khyb9p {
  d: path("M10 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.pw9vjab7j {
  d: path("M12 9V4.5a2 2 0 0 1 4 0v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wepgi1zbp {
  d: path("M6 13a6 6 0 0 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 19Z");
}
</style><g class="ulnmmdpxh"><path class="wepgi1zbp"/><path class="ki7khyb9p"/><path class="pw9vjab7j"/></g>`,
		"fallback": "uix-sharp:ear-tag",
	});
}

export default Component;
