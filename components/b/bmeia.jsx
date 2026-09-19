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
		"content": `<style>.mlpudrl4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.3h39v7.8H8.4Zm7.8 15.6h31.2v7.8H16.2Z");
}
</style><path class="mlpudrl4j"/>`,
		"fallback": "arcticons:bmeia",
	});
}

export default Component;
