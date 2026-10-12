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
		"content": `<style>.p905_6x1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.75h18.5v11.5H2.75zm0-6.75h18.5v4.25H2.75zm5.5 0l-2 4.25m7-4.25l-2 4.25m7-4.25l-2 4.25");
}
</style><path class="p905_6x1g"/>`,
		"fallback": "iconoven:clapperboard-sharp",
	});
}

export default Component;
