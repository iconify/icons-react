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
		"content": `<style>.jff77kb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4.5h9v3.25h-9zm0 5.75h16.5v3.25H3.75zm0 5.75h12v3.25h-12z");
}
</style><path class="jff77kb7b"/>`,
		"fallback": "iconoven:chart-bar-horizontal-stacked-sharp",
	});
}

export default Component;
