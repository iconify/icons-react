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
		"content": `<style>.bj6tio1qs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.75v13.5M12 7.75v13.5m4.5-13.5v13.5M6.75 4.75h3.5m3.5 0h3.5");
}
</style><path class="bj6tio1qs"/>`,
		"fallback": "iconoven:cricket-wicket-sharp",
	});
}

export default Component;
