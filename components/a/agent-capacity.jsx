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
		"content": `<style>.wo97qsbsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9.25a6.75 6.75 0 0 1 13.5 0m-15.75 0H7v6H2.5Zm13.5 5.8v-5.8h4.5v5.7m-15.75.3v1.25a3 3 0 0 0 3 3h2.75m4.25 1.5a3.5 3.5 0 0 1 7 0m-3.5 0l2-2.75");
}
</style><path class="wo97qsbsz"/>`,
		"fallback": "uix-sharp:agent-capacity",
	});
}

export default Component;
