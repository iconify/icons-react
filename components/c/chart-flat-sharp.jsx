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
		"content": `<style>.uz8suz_ea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 14.25h3.5v6h-3.5zm6.5 0h3.5v6h-3.5zm6.5 0h3.5v6h-3.5zm-14-5.5h17.5M17 5.5l3.25 3.25L17 12");
}
</style><path class="uz8suz_ea"/>`,
		"fallback": "iconoven:chart-flat-sharp",
	});
}

export default Component;
