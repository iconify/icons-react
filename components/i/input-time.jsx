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
		"content": `<style>.em4j34a7u {
  d: path("M2.5 6h19v12h-19Z");
}

.of1dtkb6u {
  d: path("M4.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_j-4sgkf {
  d: path("M7.5 10.75V12h1m5 0h5");
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="of1dtkb6u"/><path class="z_j-4sgkf"/></g>`,
		"fallback": "uix-sharp:input-time",
	});
}

export default Component;
