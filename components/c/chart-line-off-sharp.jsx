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
		"content": `<style>.jnf3frb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.63 12.75h3.25v7.5H4.63zm5.75-8h3.25v15.5h-3.25zm5.75 4.5h3.25v11h-3.25z");
}
</style><path class="jnf3frb9x"/>`,
		"fallback": "iconoven:chart-line-off-sharp",
	});
}

export default Component;
