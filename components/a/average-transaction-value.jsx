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
		"content": `<style>.symw5ybcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.228 20.87L12 21l-3.5-2L5 21V3h14v9.7M8.5 7.5h7m-7 3.5h7m-7 3.5h2.7m3.8 7v-3m3 3v-6m3 6V17m-7 .25h8");
}
</style><path class="symw5ybcf"/>`,
		"fallback": "uix-sharp:average-transaction-value",
	});
}

export default Component;
