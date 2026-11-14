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
		"content": `<style>.ag1jvabli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19M16 5v16.5M3 8h13v3.5H3Zm0 8.5h13V20H3Zm2-11h4V8H5ZM5 14h4v2.5H5Zm15.5-6v13.5M16 11.75h4.5M16 15h4.5");
}
</style><path class="ag1jvabli"/>`,
		"fallback": "uix-sharp:co-living",
	});
}

export default Component;
