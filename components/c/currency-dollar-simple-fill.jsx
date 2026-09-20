import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xh6y97byc {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m16 160h-8v8a8 8 0 0 1-16 0v-8h-8a32 32 0 0 1-32-32a8 8 0 0 1 16 0a16 16 0 0 0 16 16h32a16 16 0 0 0 0-32h-28a32 32 0 0 1 0-64h4v-8a8 8 0 0 1 16 0v8h4a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-24a16 16 0 0 0 0 32h28a32 32 0 0 1 0 64");
}
</style><path class="xh6y97byc"/>`,
		"fallback": "ph:currency-dollar-simple-fill",
	});
}

export default Component;
