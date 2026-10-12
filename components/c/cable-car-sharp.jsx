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
		"content": `<style>.y89zb670b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.5L21.25 3M12 4.75V8M5.75 8h12.5v12.75H5.75zm0 5.5h12.5M12 8v5.5");
}
</style><path class="y89zb670b"/>`,
		"fallback": "iconoven:cable-car-sharp",
	});
}

export default Component;
