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
		"content": `<style>.cck62wzax {
  d: path("M3 21v-8.5h5.5v-4h7v4H21V21M2.5 21h19M12 8.5v-6m0 0h4.5v3H12Z");
}

.qvksdrblk {
  d: path("M10 21v-3.5a2 2 0 0 1 4 0V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cck62wzax"/><path class="qvksdrblk"/></g>`,
		"fallback": "uix-sharp:city-hall-flag",
	});
}

export default Component;
