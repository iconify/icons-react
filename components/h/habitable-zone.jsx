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
		"content": `<style>.b7qju3z-j {
  d: path("M15.75 6.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 8.5l1 2.5l2.5 1l-2.5 1l-1 2.5l-1-2.5l-2.5-1l2.5-1Z");
}

.ttegd3s3w {
  d: path("M21.25 10.25a9.5 9.5 0 1 1-7.5-7.5l-.75 3A6.25 6.25 0 1 0 18.25 11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ttegd3s3w"/><path class="b7qju3z-j"/></g>`,
		"fallback": "uix-sharp:habitable-zone",
	});
}

export default Component;
