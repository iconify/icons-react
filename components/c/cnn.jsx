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
		"content": `<style>.h2h1kccpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 15.935v16.13l-12.56-16.13v16.13l-12.56-16.13v16.13h-5.815a8.065 8.065 0 0 1 0-16.13h2.829");
}
</style><path class="h2h1kccpa"/>`,
		"fallback": "arcticons:cnn",
	});
}

export default Component;
