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
		"content": `<style>.dpvi79uvs {
  fill: currentColor;
  d: path("M13 19C13 19.552 12.552 20 12 20C11.448 20 11 19.552 11 19C11 18.448 11.448 18 12 18C12.552 18 13 18.448 13 19Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v4m2yac6m {
  d: path("M4 16.464C2.762 15.75 2 14.429 2 13C2 10.791 3.791 9 6 9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9C20.209 9 22 10.791 22 13C22 14.429 21.238 15.75 20 16.464M8 17V21M16 17V21");
}
</style><g class="nrj6p8qat"><path class="dpvi79uvs"/><path class="v4m2yac6m"/></g>`,
		"fallback": "keyline-icons:cloud-sleet-fill",
	});
}

export default Component;
