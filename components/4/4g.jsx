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

.lfxxzjbny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.893 21.242a5.705 5.705 0 0 0-5.681-5.73h-.048h0a5.705 5.705 0 0 0-5.73 5.681v5.778c0 3.183 2.547 5.517 5.73 5.517h0c3.183 0 5.729-2.547 5.729-5.518h-5.73M19.132 32.5v-17l-9.025 11.333h11.125");
}
</style><path class="lfxxzjbny"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:4g",
	});
}

export default Component;
