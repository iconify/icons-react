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
		"content": `<style>.ccizyqbem {
  cx: 30.5px;
  cy: 17.5px;
  r: 12px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.msxm1u8st {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.818 20.454L5.5 29.772m22.046 3.41L18.228 42.5M26 22l-9.318 9.318");
}
</style><circle class="ccizyqbem"/><path class="msxm1u8st"/>`,
		"fallback": "arcticons:boosteroid",
	});
}

export default Component;
