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
		"content": `<style>.nv3pf0b1z {
  d: path("M2.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm13-9.5h6V7h-6Zm0 7.25h6v4.5h-6Zm0 7.25h6v4.5h-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xl6zkza7z {
  d: path("M8.5 12h7m-7.75-2l3.75-5.25h4M7.75 14l3.75 5.25h4");
}
</style><g class="ulnmmdpxh"><path class="nv3pf0b1z"/><path class="xl6zkza7z"/></g>`,
		"fallback": "uix-sharp:channel-manager",
	});
}

export default Component;
