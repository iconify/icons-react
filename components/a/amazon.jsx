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

.qib67_wma {
  d: path("M9 24.557c2.162 1.716 8.548 4.344 15.352 4.344c6.485 0 10.445-2.35 12.498-3.785");
}

.qqt9mbcay {
  d: path("M34.18 23.914c1.367-.554 3.8-1.29 4.533-.402c.792.96-.21 3.045-1.131 4.665");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><g class="y9tr6bcfx"><path class="qqt9mbcay"/><path class="qib67_wma"/></g>`,
		"fallback": "arcticons:amazon",
	});
}

export default Component;
