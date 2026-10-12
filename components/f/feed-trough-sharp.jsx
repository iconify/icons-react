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
		"content": `<style>.pxqqo8rkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10.25c1.5-2 4-3 7-3s5.5 1 7 3Zm-1.45 0h17.7l-.33.73l-2.09 4.54l-.33.73h-13l-.33-.73l-2.09-4.54l-.33-.73zm1.7 3h13.5m-12.25 3l-1.75 5m12.75-5l1.75 5");
}
</style><path class="pxqqo8rkg"/>`,
		"fallback": "iconoven:feed-trough-sharp",
	});
}

export default Component;
