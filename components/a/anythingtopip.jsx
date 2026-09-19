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
		"content": `<style>.ex4iombak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.601 30.483a82.5 82.5 0 0 1-11.238-.86a75.5 75.5 0 0 1 0-23.147a75.4 75.4 0 0 1 23.145 0a63.4 63.4 0 0 1 .861 10.775");
}

.hquj44b2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.637 41.524a75.4 75.4 0 0 1-23.145 0a75.5 75.5 0 0 1 0-23.146a75.4 75.4 0 0 1 23.145 0a75.5 75.5 0 0 1 0 23.146");
}
</style><path class="ex4iombak"/><path class="hquj44b2e"/>`,
		"fallback": "arcticons:anythingtopip",
	});
}

export default Component;
