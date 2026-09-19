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
		"content": `<style>.afhptwb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.48 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29.04a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z");
}

.yeoxgc4mb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.468 24.326a3.72 3.72 0 0 1 3.72-3.721h0m-3.72 0v9.859m18.544-1.877a3.72 3.72 0 0 1-3.233 1.877h0a3.72 3.72 0 0 1-3.72-3.72v-2.418a3.72 3.72 0 0 1 3.72-3.72h0a3.72 3.72 0 0 1 3.721 3.72v1.209h-7.441m-3.882-7.999v11.068a1.86 1.86 0 0 0 1.86 1.86h.558m-4.371-9.859h3.906m-12.189 6.139a3.72 3.72 0 0 1-3.72 3.72h0a3.72 3.72 0 0 1-3.721-3.72v-2.418a3.72 3.72 0 0 1 3.72-3.72h0a3.72 3.72 0 0 1 3.721 3.72m0 6.138v-9.859");
}
</style><path class="afhptwb_j"/><path class="yeoxgc4mb"/>`,
		"fallback": "arcticons:arte",
	});
}

export default Component;
