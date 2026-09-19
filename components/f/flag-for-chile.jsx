import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.laov0p_-f {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M18.385 16.513L20.2 11.35l1.87 5.163h5.996l-4.84 3.352l1.836 5.253l-4.862-3.229l-4.862 3.229l1.836-5.253l-4.84-3.352zM4 31v-2h28V4c15.104 0 27.471 12.022 28 27z");
}
</style><path class="laov0p_-f"/>`,
		"fallback": "emojione-monotone:flag-for-chile",
	});
}

export default Component;
