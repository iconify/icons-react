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
		"content": `<style>.af_f6ebxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 6.25l18.5-3.5M7.75 5.3V10m7.5 7v3.5h3M7 10h2.5v3.75H17V17H6v-7z");
}
</style><path class="af_f6ebxu"/>`,
		"fallback": "iconoven:chairlift-sharp",
	});
}

export default Component;
