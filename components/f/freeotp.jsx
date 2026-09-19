import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u3aa9vbzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5L7.11 14.25v19.5L24 43.5l16.89-9.75v-19.5ZM7.11 14.25L24 24m0 19.5V24m16.89-9.75L24 24");
}
</style><path class="u3aa9vbzy"/>`,
		"fallback": "arcticons:freeotp",
	});
}

export default Component;
