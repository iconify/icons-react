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
		"content": `<style>.phykfj96m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15l-4.5 4H9Zm4.5 4V16l-2 2.5m8-12V16l2 2.5m-12.5 0h15v3h-15Z");
}
</style><path class="phykfj96m"/>`,
		"fallback": "uix-sharp:column-pillar",
	});
}

export default Component;
