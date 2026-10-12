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
		"content": `<style>.zflrulofb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c1.75 1.75 4 5.5 4 10.5a4 4 0 0 1-8 0c0-5 2.25-8.75 4-10.5m0 2v12.5m-2.5 3h5");
}
</style><path class="zflrulofb"/>`,
		"fallback": "iconoven:hand-pray",
	});
}

export default Component;
