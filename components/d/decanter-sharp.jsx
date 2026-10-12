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
		"content": `<style>.mtwydcc9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.75h3v3h-3zm-.25 3h3.5l-.25 6l5.85 4.4l.9.675v4.425H3.75v-4.425l.9-.675l5.85-4.4Zm-6.5 12.5h16.5");
}
</style><path class="mtwydcc9a"/>`,
		"fallback": "iconoven:decanter-sharp",
	});
}

export default Component;
