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
		"content": `<style>.buri0ac3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.75 6v12c0 .9-1.1 1.35-1.7.7l-5.6-6a1 1 0 0 1 0-1.4l5.6-6c.6-.65 1.7-.2 1.7.7");
}
</style><path class="buri0ac3s"/>`,
		"fallback": "iconoven:caret-left",
	});
}

export default Component;
