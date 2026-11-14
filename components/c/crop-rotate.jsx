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
		"content": `<style>.c3jyl9b_j {
  d: path("m17.5 9l2 2l1.75-2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcz-kcbce {
  d: path("M3.5 8.5H15V20M11 2.5a8.5 8.5 0 0 1 8.5 8.5");
}

.yt1rkhbrg {
  d: path("M6.5 5.5V16H18");
}
</style><g class="ulnmmdpxh"><path class="yt1rkhbrg"/><path class="vcz-kcbce"/><path class="c3jyl9b_j"/></g>`,
		"fallback": "uix-sharp:crop-rotate",
	});
}

export default Component;
