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
		"content": `<style>.lm9tyksmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5V20A1.5 1.5 0 0 0 4 21.5h16a1.5 1.5 0 0 0 1.5-1.5v-4.5m-19 3h19m-19-10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM4 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm11.5-2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM17 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM9 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-1.5 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="lm9tyksmo"/>`,
		"fallback": "uix-sharp:grape-harvest",
	});
}

export default Component;
