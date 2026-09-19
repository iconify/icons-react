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
		"content": `<style>.m3f5-bxfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 5.5c0 20.435-16.565 37-37 37C15.717 42.5 24 34.217 24 24S15.717 5.5 5.5 5.5v37h37z");
}
</style><path class="m3f5-bxfv"/>`,
		"fallback": "arcticons:daiichi",
	});
}

export default Component;
