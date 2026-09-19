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
		"content": `<style>.waxfmcr-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.234 31l6.28-14H44.31a21.5 21.5 0 1 0 0 14H28.523");
}
</style><path class="waxfmcr-o"/>`,
		"fallback": "arcticons:golomt-bank",
	});
}

export default Component;
