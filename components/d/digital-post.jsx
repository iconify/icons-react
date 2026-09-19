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
		"content": `<style>.wsjxpkkeg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12h39v24h-39zm0 0l39 24m0-24L24 24");
}
</style><path class="wsjxpkkeg"/>`,
		"fallback": "arcticons:digital-post",
	});
}

export default Component;
