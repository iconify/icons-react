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
		"content": `<style>.lsdqofbzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9v2.25a5 5 0 1 0 3 0V9m-4 0h5M12 6.25C9 5 15 3.75 12 2.5");
}
</style><path class="lsdqofbzv"/>`,
		"fallback": "uix-sharp:flask-smoke",
	});
}

export default Component;
