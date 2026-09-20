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
		"content": `<style>.f_v_dfbgn {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
}

.fkkhc5bem {
  d: path("M24.334 24h6.831m3.647 10.561H24.334V13.439h10.478M21.027 31.896a5.23 5.23 0 0 1-4.552 2.665c-2.894 0-5.24-2.364-5.24-5.28v-3.433c0-2.916 2.346-5.28 5.24-5.28c2.893 0 5.239 2.364 5.239 5.28v1.716H11.235");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="f_v_dfbgn"/><path class="fkkhc5bem"/></g>`,
		"fallback": "arcticons:ebtedge",
	});
}

export default Component;
