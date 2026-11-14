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
		"content": `<style>.fq1r_vo8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5.5h17v4h-17Zm1 4v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8m-7.5 0v3m-7.5-.25h-2v3.5h2m15-3.5h2v3.5h-2");
}
</style><path class="fq1r_vo8a"/>`,
		"fallback": "uix-sharp:camp-cooler",
	});
}

export default Component;
