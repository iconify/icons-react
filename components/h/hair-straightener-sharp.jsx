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
		"content": `<style>.h__uznbui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.21 14.82l-.92.36l-.94.35l-.35-.94l-3.55-9.37l-.35-.94l.94-.35l.92-.36l.94-.35l.35.94l3.55 9.37l.35.94zm3.58 0l.92.36l.94.35l.35-.94l3.55-9.37l.35-.94l-.94-.35l-.92-.36l-.94-.35l-.35.94l-3.55 9.37l-.35.94zM9.5 17.25h5v4h-5z");
}
</style><path class="h__uznbui"/>`,
		"fallback": "iconoven:hair-straightener-sharp",
	});
}

export default Component;
