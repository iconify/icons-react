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
		"content": `<style>.gnmbr628n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17V10h-17Zm0 10.5h17v6.5h-17Zm6-10.5V10m0 4v6.5M2 17.25h20");
}
</style><path class="gnmbr628n"/>`,
		"fallback": "uix-sharp:deduplicate",
	});
}

export default Component;
