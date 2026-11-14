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
		"content": `<style>.f07n7fbvw {
  d: path("M3.75 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.5-2.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.5 2.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydh75zgrw {
  d: path("M3 16.5h18V21H3Zm2.5-7.75L12 16.5l6.5-7.75M12 6.25V16.5");
}
</style><g class="ulnmmdpxh"><path class="ydh75zgrw"/><path class="f07n7fbvw"/></g>`,
		"fallback": "uix-sharp:grave-flowers",
	});
}

export default Component;
