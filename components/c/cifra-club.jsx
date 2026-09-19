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
		"content": `<style>.a8xomf_of {
  cx: 18.584px;
  cy: 29.159px;
  r: 4.963px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.noot_hb_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.041 14.083c-3.784-3.658-9.546-4.583-13.835-1.513S15.949 21.09 5.5 24m27.798-6.64c2.8 2.654 7.003 11.38.403 14.892c-5.215 2.776-6.94 1.767-8.327 10.248");
}

.txfg9kbbc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4m13.098-20.972L38.621 5.5M25.963 24.766l16.343-16.5");
}
</style><path class="txfg9kbbc"/><path class="noot_hb_q"/><circle class="a8xomf_of"/>`,
		"fallback": "arcticons:cifra-club",
	});
}

export default Component;
