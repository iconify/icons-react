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
		"content": `<style>.ajkp7fb5u {
  d: path("M15.064 15.295L7 11.5H2.5v-4H7L15.5 3v11.782M5 11.5l1.25 5m8.75 5c0-3 1.75-4 5.75-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zanu6abbg {
  d: path("m18.75 15.5l2 2l-2 2");
}
</style><g class="ulnmmdpxh"><path class="ajkp7fb5u"/><path class="zanu6abbg"/></g>`,
		"fallback": "uix-sharp:fundraising-share",
	});
}

export default Component;
