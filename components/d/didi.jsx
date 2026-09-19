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
		"content": `<style>.z-8h2339h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.71 10.355H4.5v7.79a19.5 19.5 0 0 0 19.5 19.5h0a19.5 19.5 0 0 0 19.5-19.5");
}
</style><path class="z-8h2339h"/>`,
		"fallback": "arcticons:didi",
	});
}

export default Component;
