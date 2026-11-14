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
		"content": `<style>.hcf6lwbzq {
  d: path("M12 16.25c0-1.52-1.12-2.43-3-2.5c.07 1.65 1.2 2.55 3 2.5Zm0-.75c0-1.9 1.13-3.25 3-3.25c-.07 1.8-1.2 3.15-3 3.25Z");
}

.js0w5s5qh {
  d: path("M3.5 4.5h17v16h-17ZM8 3v3.5M16 3v3.5M3.5 9h17M12 18.5v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="js0w5s5qh"/><path class="hcf6lwbzq"/></g>`,
		"fallback": "uix-sharp:crop-calendar",
	});
}

export default Component;
