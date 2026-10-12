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
		"content": `<style>.p_07mpb3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.89 6.93l-2.82-2.82l-.71-.71l-.71.71l-5.12 5.12l-.71.71l-.41.91l-.95 2.07l-.41.91l.32.95l.42 1.28l.32.95l.87-.5l3.21-1.83l.87-.5l.71-.71l5.12-5.12l.71-.71zm-5.83 7.25L9.82 9.94M3.75 20.25h9");
}
</style><path class="p_07mpb3e"/>`,
		"fallback": "iconoven:highlighter-off-sharp",
	});
}

export default Component;
