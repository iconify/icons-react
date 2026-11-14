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
		"content": `<style>.xr-swyl4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.972 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.558 0 2.982.303 4.161.846M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8.25 14.25v-2.5L19.5 14l2.5 2.5l-4.75 4.75Z");
}
</style><path class="xr-swyl4l"/>`,
		"fallback": "uix-sharp:character-customize",
	});
}

export default Component;
