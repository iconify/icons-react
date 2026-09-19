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

.hgjepacyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.282 17.701L24 14.556v22.872m9.65-21.456h-5.3l4.3-5.4v8M18.282 37.428h11.436");
}
</style><path class="hgjepacyb"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:1111",
	});
}

export default Component;
