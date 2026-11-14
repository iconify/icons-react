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
		"content": `<style>.bnof9cbhr {
  d: path("M11 10.5L16.25 5l5.25 5.5v9H11Zm-8.5-1H7v10H2.5Zm1.25 0V8h2v1.5m2.75 5H15");
}

.m0_bjhp0l {
  d: path("M12.75 12.25L15 14.5l-2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bnof9cbhr"/><path class="m0_bjhp0l"/></g>`,
		"fallback": "uix-sharp:battery-to-home",
	});
}

export default Component;
