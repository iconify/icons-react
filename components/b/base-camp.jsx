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
		"content": `<style>.n50xzfbrc {
  d: path("m3 20.5l5-11l5 11");
}

.spg5s-bma {
  d: path("M11.25 16.75L15.5 4.5l5.5 16m-18.5 0h19M6 20.5l2-4l2 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n50xzfbrc"/><path class="spg5s-bma"/></g>`,
		"fallback": "uix-sharp:base-camp",
	});
}

export default Component;
