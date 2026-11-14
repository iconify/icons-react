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
		"content": `<style>.orm9sfpbw {
  d: path("M7.75 6.75L12 11.5l4.25-4.75M12 11.5v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjrka3bvi {
  d: path("M3.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm12 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-6 14a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="vjrka3bvi"/><path class="orm9sfpbw"/></g>`,
		"fallback": "uix-sharp:git-fork",
	});
}

export default Component;
