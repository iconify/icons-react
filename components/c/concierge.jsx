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
		"content": `<style>.h3dukbciy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 17.5a8 8 0 0 1 16 0Zm8-8v-2m-2 0h4m-11 13h18");
}
</style><path class="h3dukbciy"/>`,
		"fallback": "uix-sharp:concierge",
	});
}

export default Component;
