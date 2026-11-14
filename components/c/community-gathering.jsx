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
		"content": `<style>.zeu9pw--o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM9.5 13c0-2 1-3.25 2.5-3.25S14.5 11 14.5 13M2.75 11.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM2 21c0-2.75 1.25-4.5 3-4.5s3 1.75 3 4.5m8.75-9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM16 21c0-2.75 1.25-4.5 3-4.5s3 1.75 3 4.5");
}
</style><path class="zeu9pw--o"/>`,
		"fallback": "uix-sharp:community-gathering",
	});
}

export default Component;
