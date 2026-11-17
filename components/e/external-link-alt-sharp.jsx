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
		"content": `<style>.mpdj-acxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 19h5V5H5v5m-1 5h5v5m0-5l-6 6");
}
</style><path class="mpdj-acxk"/>`,
		"fallback": "coolicons:external-link-alt-sharp",
	});
}

export default Component;
