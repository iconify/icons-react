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
		"content": `<style>.vzb7bubbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H5v18h4m4-18l6 6m-6-6v6h6m-2 4h4v3c0 2.5-1.5 4-4 5c-2.5-1-4-2.5-4-5v-3z");
}
</style><path class="vzb7bubbf"/>`,
		"fallback": "coolicons:file-shield-corner-sharp",
	});
}

export default Component;
