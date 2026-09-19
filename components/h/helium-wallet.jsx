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
		"content": `<style>.eofsiebfv {
  cx: 24px;
  cy: 24px;
  r: 2.937px;
}

.f_v_dfbgn {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
}

.gigdndkzm {
  d: path("M19.648 31.474a4.072 4.072 0 1 1-3.25-3.124m11.904-11.71a4.072 4.072 0 1 1 3.25 3.123m-.07.045a8.576 8.576 0 0 1-11.872 11.56m-3.17-3.153a8.576 8.576 0 0 1 11.873-11.56");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="f_v_dfbgn"/><path class="gigdndkzm"/><circle class="eofsiebfv"/></g>`,
		"fallback": "arcticons:helium-wallet",
	});
}

export default Component;
