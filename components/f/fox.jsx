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

.r_b22jbzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.738 19.5l5.849 9m0-9l-5.849 9M12.412 24h2.926m-2.926 4.5v-9h4.501m6.356 9zc-1.688 0-2.925-1.35-2.925-2.925v-3.037c0-1.688 1.35-3.038 2.925-3.038a3.025 3.025 0 0 1 3.037 3.037v2.925A3.025 3.025 0 0 1 23.27 28.5");
}
</style><circle class="cpk0fnbgt"/><path class="r_b22jbzx"/>`,
		"fallback": "arcticons:fox",
	});
}

export default Component;
