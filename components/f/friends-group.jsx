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
		"content": `<style>.xyr8tyeci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 11.5v-4A2.25 2.25 0 0 1 7 15v4M9.75 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm0 11.5v-4a2.25 2.25 0 0 1 4.5 0v4M17 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM17 19v-4a2.25 2.25 0 0 1 4.5 0v4");
}
</style><path class="xyr8tyeci"/>`,
		"fallback": "uix-sharp:friends-group",
	});
}

export default Component;
