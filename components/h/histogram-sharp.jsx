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
		"content": `<style>.v30v90xbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17.75v-5.5h4v-6h4v-2.5h4v6h4v8Zm4-5.5v5.5m4-11.5v11.5m4-8v8m-13.25 3h18.5");
}
</style><path class="v30v90xbx"/>`,
		"fallback": "iconoven:histogram-sharp",
	});
}

export default Component;
