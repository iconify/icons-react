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
		"content": `<style>.z0nsj5b4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12.5h15V16a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3Zm3 6.5v2.5m9-2.5v2.5M12 9.75a3 3 0 0 1-3-3c0-2 1.75-3 2.25-4.25C13.5 3.5 15 5 15 6.75a3 3 0 0 1-3 3Z");
}
</style><path class="z0nsj5b4m"/>`,
		"fallback": "uix-sharp:alcohol-stove",
	});
}

export default Component;
