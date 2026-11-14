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
		"content": `<style>.cgnco9b6a {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM9 9h.01M15 9h.01");
}

.mlvna-k_w {
  d: path("M12 13.5C10.5 12 8 12 7 14c-.5 1-1.25 1-1.75 0C5.5 16.5 8 17.25 10 16c1-.5 1.5-1 2-1s1 .5 2 1c2 1.25 4.5.5 4.75-2c-.5 1-1.25 1-1.75 0c-1-2-3.5-2-5-.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cgnco9b6a"/><path class="mlvna-k_w"/></g>`,
		"fallback": "uix-sharp:face-mustache",
	});
}

export default Component;
