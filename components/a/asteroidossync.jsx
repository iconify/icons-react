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
		"content": `<style>.tz4_-v1zs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 3.5L44.5 24L24 44.5L3.5 24Zm-3.69 11.89l-4.1 4.1l4.1 4.1l4.1-4.1Zm4.1 4.1l4.1 4.1l-9 9l4.1 4.1l9-9l3.28-3.28l.82-.82l-8.2-8.2z");
}
</style><path class="tz4_-v1zs"/>`,
		"fallback": "arcticons:asteroidossync",
	});
}

export default Component;
