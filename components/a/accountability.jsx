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
		"content": `<style>.blgybcbud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-4 3.5-6.5 8-6.5c.721 0 1.416.064 2.075.188m1.816.531q.572.234 1.08.539m3.02 4.894Q20 20.824 20 21m-5.25-3l2 2L21 15.75");
}
</style><path class="blgybcbud"/>`,
		"fallback": "uix-sharp:accountability",
	});
}

export default Component;
