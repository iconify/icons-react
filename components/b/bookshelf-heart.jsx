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
		"content": `<style>.mc5dx17vz {
  d: path("m18.5 21.5l-2.75-3a2 2 0 0 1 2.75-2.25a2 2 0 0 1 2.75 2.25Z");
}

.pd4d9ebtq {
  d: path("M13.8 20.5H2.5v-18h17v10.7m-17-1.7h17M6 5.5v6m2.75-6v6m3-5.5l2.75 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pd4d9ebtq"/><path class="mc5dx17vz"/></g>`,
		"fallback": "uix-sharp:bookshelf-heart",
	});
}

export default Component;
