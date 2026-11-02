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
		"content": `<style>.c6oaeovhm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 6h12l-4 4H4zm0 8h12l-4 4H4zm-4-4l4 4m8-4l4 4");
}
</style><path class="c6oaeovhm"/>`,
		"fallback": "coolicons:currency-solana-sharp",
	});
}

export default Component;
