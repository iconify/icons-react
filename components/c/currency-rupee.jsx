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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z0jhuqurq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.172 15.205h3.56c3.257 0 5.897 2.646 5.897 5.909s-2.64 5.909-5.896 5.909l5.896 5.772m-5.896-17.59h8.095m-11.656 5.938h11.656");
}
</style><path class="z0jhuqurq"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:currency-rupee",
	});
}

export default Component;
