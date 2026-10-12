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
		"content": `<style>.mrh66oqyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75V7M9.75 7h5.75l.62 1.09l3.01 5.32l.62 1.09H4.25l.62-1.09l3.01-5.32L8.5 7zM9 14.5a3 3 0 0 0 6 0Zm3 5v1.75m-3.36-3.39l-1.41 1.41m8.13-1.41l1.41 1.41");
}
</style><path class="mrh66oqyj"/>`,
		"fallback": "iconoven:darkroom-light-sharp",
	});
}

export default Component;
