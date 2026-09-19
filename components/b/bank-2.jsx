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
		"content": `<style>.ay-1v1zmd {
  cx: 24px;
  cy: 12.615px;
  r: 2.696px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jz4981b2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.162 19.248v18.134M13.95 19.248v18.134M9.739 19.248v18.134m20.099 0V19.248m4.212 18.134V19.248m4.211 18.134V19.248");
}

.q0rwkcolu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 37.382h37V42.5h-37zm37-22.817L24 5.5L5.5 14.565v4.683h37zm-37 0h11.655m13.69 0H42.5");
}
</style><path class="q0rwkcolu"/><circle class="ay-1v1zmd"/><path class="jz4981b2m"/>`,
		"fallback": "arcticons:bank-2",
	});
}

export default Component;
