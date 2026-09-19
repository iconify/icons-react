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
		"content": `<style>.lhku0co0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5L45.5 24L24 45.5L2.5 24zm0 6.297v30.406M45.5 24h-6.297M8.797 24H2.5");
}

.v_yabbc2p {
  cx: 24px;
  cy: 24px;
  r: 15.203px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="v_yabbc2p"/><path class="lhku0co0f"/>`,
		"fallback": "arcticons:iconeration",
	});
}

export default Component;
