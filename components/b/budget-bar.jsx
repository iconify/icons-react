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
		"content": `<style>.fl_0t9uxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18m3-17h14v3.5h-14Zm0 6.25h9v3.5h-9Zm0 6.25h12V20h-12Z");
}
</style><path class="fl_0t9uxx"/>`,
		"fallback": "uix-sharp:budget-bar",
	});
}

export default Component;
