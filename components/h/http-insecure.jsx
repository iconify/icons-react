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
		"content": `<style>.geh6pke9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 19.5H3v-10h12.5v2.2M6.25 9.5V6a3.5 3.5 0 0 1 7 0v1M18 14.5V18m0 3h.01");
}
</style><path class="geh6pke9z"/>`,
		"fallback": "uix-sharp:http-insecure",
	});
}

export default Component;
