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
		"content": `<style>.yxd4rnbcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6 8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h26.83v-9.17a2 2 0 0 1 2-2H44V10a2 2 0 0 0-2-2Zm38 20.83L32.83 40M9.08 33.42H26.5M9.08 14.58h29.84M9.08 24H26.5");
}
</style><path class="yxd4rnbcq"/>`,
		"fallback": "arcticons:google-newsweather",
	});
}

export default Component;
