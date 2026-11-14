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
		"content": `<style>.jgecvf4ox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h19M3 15v3.5M7.5 15v3.5M12 15v3.5m4.5-3.5v3.5M21 15v3.5m-15-9h3l-1.5 2.75ZM18 9c-1.25-2.5-3.5-2.5-3.5 0s2.25 2.5 3.5 0s3.5-2.5 3.5 0s-2.25 2.5-3.5 0Z");
}
</style><path class="jgecvf4ox"/>`,
		"fallback": "uix-sharp:focus-distance",
	});
}

export default Component;
