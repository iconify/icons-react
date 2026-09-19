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
		"content": `<style>.ms4_5pbll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.074 10.426L24 3.5l6.926 6.926m6.648 6.648L44.5 24l-6.926 6.926m-6.648 6.648L24 44.5l-6.926-6.926m-6.648-6.648L3.5 24l6.926-6.926");
}

.r4-sq68mq {
  cx: 24px;
  cy: 24px;
  r: 6.649px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="r4-sq68mq"/><path class="ms4_5pbll"/>`,
		"fallback": "arcticons:appvaultx",
	});
}

export default Component;
