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

.e3dcz7bhl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.95 19.05c-2.734-2.734-15.84-5.941-15.84-5.941s3.207 13.107 5.94 15.841a7 7 0 0 0 9.9-9.9");
}
</style><circle class="cpk0fnbgt"/><path class="e3dcz7bhl"/>`,
		"fallback": "arcticons:device-info-pro",
	});
}

export default Component;
