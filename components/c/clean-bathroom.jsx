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
		"content": `<style>.pof7n6-1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18v2.5a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 14.5Zm3.5 7l-.75 2m11.75-2l.75 2M17.5 3l1.061 1.939L20.5 6l-1.939 1.061L17.5 9l-1.061-1.939L14.5 6l1.939-1.061Z");
}
</style><path class="pof7n6-1v"/>`,
		"fallback": "uix-sharp:clean-bathroom",
	});
}

export default Component;
