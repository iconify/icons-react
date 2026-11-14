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
		"content": `<style>.kuyl8ebfc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5h19M4 16.5V21m16-4.5V21M11 3h2v13.5h-2ZM2.5 7h5.75v5H2.5Zm13.25 0h5.75v5h-5.75ZM5.5 12v4.5m13-4.5v4.5");
}
</style><path class="kuyl8ebfc"/>`,
		"fallback": "uix-sharp:desk-partition",
	});
}

export default Component;
