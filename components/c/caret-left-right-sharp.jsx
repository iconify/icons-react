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
		"content": `<style>.tsq9gabcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.18 11.24l5.14-4.23l.93-.76v11.5l-.93-.76l-5.14-4.23l-.93-.76zm15.64 0l-5.14-4.23l-.93-.76v11.5l.93-.76l5.14-4.23l.93-.76z");
}
</style><path class="tsq9gabcf"/>`,
		"fallback": "iconoven:caret-left-right-sharp",
	});
}

export default Component;
