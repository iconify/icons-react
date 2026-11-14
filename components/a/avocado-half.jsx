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
		"content": `<style>.q8g0wo8vz {
  d: path("M8.75 14a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_ywco41j {
  d: path("M12 3c4.5 0 6.5 5 6.5 10c0 4.5-2.75 8-6.5 8s-6.5-3.5-6.5-8c0-5 2-10 6.5-10Z");
}
</style><g class="ulnmmdpxh"><path class="y_ywco41j"/><path class="q8g0wo8vz"/></g>`,
		"fallback": "uix-sharp:avocado-half",
	});
}

export default Component;
