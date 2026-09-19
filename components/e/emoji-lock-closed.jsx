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
		"content": `<style>.eba3fmo5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.652 21.587v-5.228c0-5.331-4.321-9.653-9.652-9.653s-9.652 4.322-9.652 9.653v5.228");
}

.nfe0bqezc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.522 21.587h28.956v19.706H9.522z");
}

.o3azcttch {
  cx: 24px;
  cy: 31.44px;
  r: 3.016px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="eba3fmo5v"/><path class="nfe0bqezc"/><circle class="o3azcttch"/>`,
		"fallback": "arcticons:emoji-lock-closed",
	});
}

export default Component;
