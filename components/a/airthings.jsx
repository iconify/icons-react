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

.smyk22bja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.75 41.31L26.38 17.73c-.91-2.08-3.86-2.08-4.77 0L11.24 41.31m5-11.31h15.52");
}
</style><circle class="cpk0fnbgt"/><path class="smyk22bja"/>`,
		"fallback": "arcticons:airthings",
	});
}

export default Component;
