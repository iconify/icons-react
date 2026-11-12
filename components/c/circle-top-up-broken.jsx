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
		"content": `<style>.d15e38t2g {
  stroke-linejoin: round;
  d: path("M13 11L22 2M22 7.34375V2H16.6562");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t2rxu0jgy {
  d: path("M12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17M22 12C22 17.5228 17.5228 22 12 22C10.1786 22 8.47087 21.513 7 20.6622");
}
</style><g class="ipq1z-bjh"><path class="d15e38t2g"/><path class="t2rxu0jgy"/></g>`,
		"fallback": "solar:circle-top-up-broken",
	});
}

export default Component;
