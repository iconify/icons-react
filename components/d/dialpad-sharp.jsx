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
		"content": `<style>.qkgv_hb2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 4h.01M12 4h.01M18 4h.01M6 9h.01M12 9h.01M18 9h.01M6 14h.01M12 14h.01M18 14h.01M12 19h.01");
}
</style><path class="qkgv_hb2p"/>`,
		"fallback": "coolicons:dialpad-sharp",
	});
}

export default Component;
