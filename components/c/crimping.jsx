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
		"content": `<style>.ho3k8tbrt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 9.5h3.5a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75M2.5 12h6m8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-1 0h1M12 2.5v4m-1.75-1.75L12 6.5l1.75-1.75M12 21.5v-4m-1.75 1.75L12 17.5l1.75 1.75");
}
</style><path class="ho3k8tbrt"/>`,
		"fallback": "uix:crimping",
	});
}

export default Component;
