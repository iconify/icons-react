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

.zaha57b9p {
  d: path("M8.5 7h7v4h3v8a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-8h3Zm1 0c0-4.5 5-4.5 5 0m-9 4l-3 2m16-2l3 2");
}

.zntn76-mv {
  d: path("M9 14.25h6V16a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z");
}
</style><g class="ulnmmdpxh"><path class="zaha57b9p"/><path class="zntn76-mv"/></g>`,
		"fallback": "uix-sharp:garden-apron",
	});
}

export default Component;
