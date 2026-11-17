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
		"content": `<style>.z5en_uptz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.823 16.823c-.25.114-.53.177-.823.177H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m6 0h3a2 2 0 0 1 2 2v3m3-2v4M2 2l20 20");
}
</style><path class="z5en_uptz"/>`,
		"fallback": "coolicons:battery-off",
	});
}

export default Component;
