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
		"content": `<style>.x3x6dmp9r {
  cx: 34.25px;
  cy: 34.25px;
  r: 8.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zzvn_qs9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v37h-9.25L5.5 33.25v-18.5l9.25-9.25h18.5l9.25 9.25V24h-37");
}
</style><circle class="x3x6dmp9r"/><path class="zzvn_qs9s"/>`,
		"fallback": "arcticons:esimcrew",
	});
}

export default Component;
