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
		"content": `<style>.lbq1b4uwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.884 34.73a8.197 8.197 0 0 0 9.76-9.76l6.562-6.562a16.775 16.775 0 0 1-22.884 22.885Z");
}

.p6bvpmbag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.782 35.833a16.772 16.772 0 1 1 22.884-22.885l-6.562 6.562a8.191 8.191 0 1 0-9.76 9.76Z");
}
</style><path class="lbq1b4uwe"/><path class="p6bvpmbag"/>`,
		"fallback": "arcticons:glitch-lab",
	});
}

export default Component;
