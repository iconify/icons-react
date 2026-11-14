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
		"content": `<style>.vt02a4bje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19L19 7H5Zm1.25-5h16.5M12 7v5m-4 0v5m8-5v5");
}
</style><path class="vt02a4bje"/>`,
		"fallback": "uix-sharp:foam-barrier",
	});
}

export default Component;
