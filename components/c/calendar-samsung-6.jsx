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
		"content": `<style>.kzykk8swa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-4v1a3.5 3.5 0 1 1-7 0v-1h-8v1a3.5 3.5 0 1 1-7 0v-1h-3a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.m4wtvmses {
  d: path("M28.74 21.975C27.95 20.79 26.569 20 24.396 20H24a5.31 5.31 0 0 0-5.333 5.333v5.334");
}

.x5hwmfx5f {
  cx: 24px;
  cy: 30.667px;
  r: 5.333px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="x5hwmfx5f"/><path class="m4wtvmses"/></g><path class="kzykk8swa"/>`,
		"fallback": "arcticons:calendar-samsung-6",
	});
}

export default Component;
