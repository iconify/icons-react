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
		"content": `<style>.b6bb_ibvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 19h3c.738 0 1.369-.631 1-1l-5-5a1.414 1.414 0 0 1 0-2l5-5c.369-.369-.262-1-1-1h-6c-.64 0-1.36.36-2 1l-5 5a1.414 1.414 0 0 0 0 2l5 5c.64.64 1.36 1 2 1z");
}
</style><path class="b6bb_ibvs"/>`,
		"fallback": "coolicons:arrow-badge-left-duocolor-round",
	});
}

export default Component;
