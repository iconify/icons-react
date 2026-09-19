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

.ug35shkdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.525 30.695a5.89 5.89 0 0 1-4.516 2.102h0a5.9 5.9 0 0 1-5.9-5.9v-5.794a5.9 5.9 0 0 1 5.9-5.9h0a5.89 5.89 0 0 1 4.535 2.125M15.91 21.862h6.598M15.91 26.18h6.598");
}
</style><path class="ug35shkdh"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:currency-euro",
	});
}

export default Component;
