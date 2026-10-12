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
		"content": `<style>.ufq23ku-m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.25v-6.5M8.75 6L12 2.75L15.25 6m-12 5.5h17.5v9.75H3.25zm0 4.88h17.5M7 13.94h3m-3 4.87h3");
}
</style><path class="ufq23ku-m"/>`,
		"fallback": "iconoven:deploy-arrow-sharp",
	});
}

export default Component;
