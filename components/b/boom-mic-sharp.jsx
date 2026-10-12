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
		"content": `<style>.hrfwxacmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75H16m0 0v2.5m-2.75 0h5.5v14h-5.5zm0 4h5.5m-5.5 3h5.5m-5.5 3h5.5M2.75 3v3.5");
}
</style><path class="hrfwxacmr"/>`,
		"fallback": "iconoven:boom-mic-sharp",
	});
}

export default Component;
