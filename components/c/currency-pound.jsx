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

.yj1l9_t5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.828 19.822a4.62 4.62 0 0 0-4.618-4.619h0a4.62 4.62 0 0 0-4.619 4.619v8.307c0 .96-.314 1.893-.894 2.658l-1.525 2.01h11.656m-6.818-8.192h-4.838");
}
</style><path class="yj1l9_t5l"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:currency-pound",
	});
}

export default Component;
