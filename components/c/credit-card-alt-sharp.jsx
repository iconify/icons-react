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
		"content": `<style>.yq2gpwbnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5h18v14H3Zm8 10c-2 0-2-3 0-3m4 0c2 0 2 3 0 3s-2-3 0-3");
}
</style><path class="yq2gpwbnl"/>`,
		"fallback": "coolicons:credit-card-alt-sharp",
	});
}

export default Component;
