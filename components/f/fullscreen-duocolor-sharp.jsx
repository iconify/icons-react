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
		"content": `<style>.myfbypbmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8V3h5m8 0h5v5m0 8v5h-5m-8 0H3v-5");
}
</style><path class="myfbypbmu"/>`,
		"fallback": "coolicons:fullscreen-duocolor-sharp",
	});
}

export default Component;
