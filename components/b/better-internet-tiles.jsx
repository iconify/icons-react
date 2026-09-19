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
		"content": `<style>.h82cjh-ej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 24.031c5.823-5.249 11.547-4.594 17.203.226");
}

.orhqobbyl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.534 34.58H43.5V14.364zm13.209-14.863V34.58m-21.598 0l12.896-15.555c-7.884-6.294-16.163-8.616-25.54.126z");
}
</style><path class="orhqobbyl"/><path class="h82cjh-ej"/>`,
		"fallback": "arcticons:better-internet-tiles",
	});
}

export default Component;
