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
		"content": `<style>.ae_c-g-6n {
  cx: 24px;
  cy: 18.983px;
  r: 14.482px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p4c_dnbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.518 32.874v5.044C9.518 41 16 43.5 24 43.5s14.483-2.5 14.483-5.582v-5.044");
}

.zo2epnhzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.449 29.009c2.498 1.003 4.034 2.365 4.034 3.865c0 3.083-6.484 5.582-14.483 5.582S9.518 35.957 9.518 32.875c0-1.5 1.535-2.862 4.034-3.865");
}
</style><circle class="ae_c-g-6n"/><path class="zo2epnhzt"/><path class="p4c_dnbaw"/>`,
		"fallback": "arcticons:carrom-disc-pool",
	});
}

export default Component;
