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
		"content": `<style>.emrxkfbid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.976 24L6.179 5.5v37z");
}

.xc17i9b2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.976 24h20.846L28.396 5.5H6.179zm0 0h20.846L28.396 42.5H6.179z");
}
</style><path class="emrxkfbid"/><path class="xc17i9b2g"/>`,
		"fallback": "arcticons:dabeipackzettel",
	});
}

export default Component;
