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
		"content": `<style>.bfeaq6biy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h8v13h-8Zm11 0h8v13h-8Zm-7 10v.5m11-.5v.5M12 2.5v1");
}
</style><path class="bfeaq6biy"/>`,
		"fallback": "uix-sharp:device-compare",
	});
}

export default Component;
