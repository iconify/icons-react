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
		"content": `<style>.gg2603b7v {
  d: path("M15 16.5h6V21h-6Zm1.25 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}

.jvhzyj__t {
  d: path("M12.2 20.5H3.5V5h17v6.7M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 10h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jvhzyj__t"/><path class="gg2603b7v"/></g>`,
		"fallback": "uix-sharp:calendar-lock",
	});
}

export default Component;
