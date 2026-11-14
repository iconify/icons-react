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
		"content": `<style>.gxgy5_blu {
  d: path("M8.5 11a3.5 1.5 0 1 0 7 0a3.5 1.5 0 1 0-7 0Zm10.25 5L21 20");
}

.oxjwcvb5u {
  d: path("M2.5 11a9.5 7 0 1 0 19 0a9.5 7 0 1 0-19 0Z");
}

.sje5chbik {
  d: path("M5.5 11a6.5 4.25 0 1 0 13 0a6.5 4.25 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oxjwcvb5u"/><path class="sje5chbik"/><path class="gxgy5_blu"/></g>`,
		"fallback": "uix-sharp:copper-wire-coil",
	});
}

export default Component;
