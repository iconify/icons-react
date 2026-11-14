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
		"content": `<style>.df_-awhmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5v17m-4 0h8M5.5 6h13m-16 7l3-7l3 7Zm0 0a3 3 0 0 0 6 0m7 0l3-7l3 7Zm0 0a3 3 0 0 0 6 0");
}
</style><path class="df_-awhmc"/>`,
		"fallback": "uix-sharp:accounting-equation",
	});
}

export default Component;
