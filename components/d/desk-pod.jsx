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
		"content": `<style>.lrion4etn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5v-6h19v6M12 4v10.5M3 6h6v4.5H3Zm12 0h6v4.5h-6Zm-9 4.5v4m12-4v4");
}
</style><path class="lrion4etn"/>`,
		"fallback": "uix-sharp:desk-pod",
	});
}

export default Component;
