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

.xqjbduv-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.345 27.778c1.777 1.78 3.015 4.217 3.84 6.359c.547 1.424 2.569 1.396 3.068-.046l5.865-16.928c.46-1.327-.811-2.6-2.139-2.142L14.043 20.86c-1.443.497-1.474 2.519-.051 3.069c2.14.827 4.576 2.069 6.353 3.849");
}
</style><circle class="cpk0fnbgt"/><path class="xqjbduv-t"/>`,
		"fallback": "arcticons:exteragram",
	});
}

export default Component;
