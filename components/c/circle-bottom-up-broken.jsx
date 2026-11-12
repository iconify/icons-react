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
		"content": `<style>.bhy-axcbm {
  stroke-linejoin: round;
  d: path("M3 21L11 13M11 19V13H5");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w5j1ppb8l {
  d: path("M12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7M2 12C2 6.47715 6.47715 2 12 2C13.8214 2 15.5291 2.48697 17 3.33782");
}
</style><g class="ipq1z-bjh"><path class="bhy-axcbm"/><path class="w5j1ppb8l"/></g>`,
		"fallback": "solar:circle-bottom-up-broken",
	});
}

export default Component;
