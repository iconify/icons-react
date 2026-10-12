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
		"content": `<style>.kw0hxbuoy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5H2.75v6h2l.13 1.49l.49 5.52l.13 1.49h4l-.13-1.49l-.49-5.52L8.75 11H11V5zM11 6.25h3v3.5h-3zm6.5-1.5l-1.125 1.125L17.5 7l1.125 1.125L17.5 9.25l-1.125 1.125L17.5 11.5m3-6.75l-1.125 1.125L20.5 7l1.125 1.125L20.5 9.25l-1.125 1.125L20.5 11.5");
}
</style><path class="kw0hxbuoy"/>`,
		"fallback": "iconoven:heat-gun-sharp",
	});
}

export default Component;
