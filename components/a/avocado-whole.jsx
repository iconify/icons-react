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
		"content": `<style>.guj2_22dh {
  d: path("M9 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.hmvluyt1q {
  d: path("M12 4c2.5 0 3.5 2.5 4.5 5s3 4 3 7a7.5 5.5 0 0 1-15 0c0-3 2-4.5 3-7s2-5 4.5-5Zm0 0l1.25-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hmvluyt1q"/><path class="guj2_22dh"/></g>`,
		"fallback": "uix-sharp:avocado-whole",
	});
}

export default Component;
