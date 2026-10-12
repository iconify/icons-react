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
		"content": `<style>.gddthvbkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12.5h7.5v8.75h-7.5zm11 0h7.5v8.75h-7.5zm-7.25 0v3m11-3v3M12 3v6M9 6h6");
}
</style><path class="gddthvbkg"/>`,
		"fallback": "iconoven:bundle-offer-sharp",
	});
}

export default Component;
