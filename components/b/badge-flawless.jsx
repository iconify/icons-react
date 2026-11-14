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
		"content": `<style>.i_u70cbem {
  d: path("m9.25 9.25l2 2l3.5-3.75M8 14l-1.5 7L9 19.75L10.5 21l.25-5.5M16 14l1.5 7l-2.5-1.25L13.5 21l-.25-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwz9jvx6z {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}
</style><g class="ulnmmdpxh"><path class="zwz9jvx6z"/><path class="i_u70cbem"/></g>`,
		"fallback": "uix-sharp:badge-flawless",
	});
}

export default Component;
