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
		"content": `<style>.ci4_0wvlw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 15v3c0 .738-.631 1.369-1 1l-5-5a1.414 1.414 0 0 0-2 0l-5 5c-.369.369-1-.262-1-1v-6c0-.64.36-1.36 1-2l5-5a1.414 1.414 0 0 1 2 0l5 5c.64.64 1 1.36 1 2z");
}
</style><path class="ci4_0wvlw"/>`,
		"fallback": "coolicons:arrow-badge-up-duocolor-round",
	});
}

export default Component;
