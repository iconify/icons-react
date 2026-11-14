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
		"content": `<style>.p6p41fbae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19m-16.75 0V12M12 7.5V12m7.25-4.5V12M2.5 12H7v4.5H2.5Zm7.25 0h4.5v4.5h-4.5ZM17 12h4.5v4.5H17Z");
}
</style><path class="p6p41fbae"/>`,
		"fallback": "uix-sharp:industrial-network",
	});
}

export default Component;
