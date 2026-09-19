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
		"content": `<style>.a2lqrlbfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.64 37.5h-7.394l3.697-6.638z");
}

.doocnde3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.844 37.636h2.016l-6.572 4.274l-5.797-4.322L24 6.09l18.509 31.498l-5.797 4.322l-6.572-4.274h2.016L24 24.444z");
}
</style><path class="doocnde3q"/><path class="a2lqrlbfu"/>`,
		"fallback": "arcticons:3a-cloud-games",
	});
}

export default Component;
