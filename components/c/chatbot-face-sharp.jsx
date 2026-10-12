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
		"content": `<style>.j0ow62bhu {
  d: path("M7.75 9h2.5v3.5h-2.5zm6 0h2.5v3.5h-2.5z");
}

.l1nb51yql {
  d: path("M6 4.75h15.25v12.5h-8.5l-3.9 3.15l-.973.965L8 20v-2.75H2.75V4.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l1nb51yql"/><path class="j0ow62bhu"/></g>`,
		"fallback": "iconoven:chatbot-face-sharp",
	});
}

export default Component;
