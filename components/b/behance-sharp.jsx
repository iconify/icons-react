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
		"content": `<style>.yr6eqdl_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 13h6a3 3 0 0 0-6 0v2a3 3 0 0 0 3 3c1 0 1.6-.4 2-1M16 6h4M3 18V6h3a3 3 0 0 1 0 6H3m0 0h4a3 3 0 0 1 0 6H3");
}
</style><path class="yr6eqdl_v"/>`,
		"fallback": "coolicons:behance-sharp",
	});
}

export default Component;
