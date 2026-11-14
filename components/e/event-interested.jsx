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
		"content": `<style>.i15xejglh {
  d: path("M3 4.5h18v17H3Zm5-2v3.75m8-3.75v3.75M3 9h18");
}

.shvjqkb5s {
  d: path("m12 12l.75 2.25l2.5.25L13.5 16l.5 2.25L12 17l-2 1.25l.5-2.25l-1.75-1.5l2.5-.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i15xejglh"/><path class="shvjqkb5s"/></g>`,
		"fallback": "uix-sharp:event-interested",
	});
}

export default Component;
