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
		"content": `<style>.c-r38zbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.523 38.141A14.84 14.84 0 0 1 24 42.5c-8.22 0-14.882-6.663-14.882-14.882S15.78 12.736 24 12.736s14.882 6.663 14.882 14.882m0 0V42.5m0-37v13.11");
}
</style><path class="c-r38zbnc"/>`,
		"fallback": "arcticons:da-fit",
	});
}

export default Component;
