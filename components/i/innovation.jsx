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
		"content": `<style>.tc-_jnbft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 17v-3a6 6 0 1 1 5 0v3Zm.5 3h4m6-6.5q.5 3 3.5 3.5q-3 .5-3.5 3.5q-.5-3-3.5-3.5q3-.5 3.5-3.5Z");
}
</style><path class="tc-_jnbft"/>`,
		"fallback": "uix-sharp:innovation",
	});
}

export default Component;
