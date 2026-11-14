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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vphrv8b8n {
  d: path("M17 7.25V8a6 6 0 0 1-6 6H6m8.75 4l2 2L21 15.75");
}

.x1vcjfb3h {
  d: path("M14.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-11 14a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM6 2.5v14.25");
}
</style><g class="ulnmmdpxh"><path class="x1vcjfb3h"/><path class="vphrv8b8n"/></g>`,
		"fallback": "uix-sharp:git-merge-check",
	});
}

export default Component;
