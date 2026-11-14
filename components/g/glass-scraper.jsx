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
		"content": `<style>.tm2crmbpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.414 2.101l8.485 8.485l-2.828 2.828l-8.485-8.485Zm1.414 7.071l-1.944 1.944m-1.061-1.061l2.122 2.122l-8.309 8.308l-2.121-2.121Z");
}
</style><path class="tm2crmbpo"/>`,
		"fallback": "uix-sharp:glass-scraper",
	});
}

export default Component;
