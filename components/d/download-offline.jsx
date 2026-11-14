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
		"content": `<style>.dqvdx7b1u {
  d: path("M13.1 16.5H2.5v-13h19v11.6");
}

.u-svdtb5w {
  d: path("m10 7l5 3l-5 3Zm8 7.5v7m-3-3l3 3l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dqvdx7b1u"/><path class="u-svdtb5w"/></g>`,
		"fallback": "uix-sharp:download-offline",
	});
}

export default Component;
