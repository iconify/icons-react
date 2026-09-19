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
		"content": `<style>.hq87k_bzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.496 42.5c0-12.705 10.3-23.004 23.004-23.004");
}

.ixcwofmbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.165 42.5c0-17.858 14.477-32.335 32.335-32.335");
}

.k9ymmugna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.16 42.5c0-10.128 8.212-18.34 18.34-18.34");
}

.liq_-m__b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.826 42.5c0-7.552 6.122-13.674 13.674-13.674V5.5c-20.434 0-37 16.566-37 37z");
}

.pbcffvbgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.83 42.5c0-15.281 12.388-27.67 27.67-27.67");
}
</style><path class="ixcwofmbk"/><path class="pbcffvbgx"/><path class="hq87k_bzu"/><path class="k9ymmugna"/><path class="liq_-m__b"/>`,
		"fallback": "arcticons:emoji-rainbow",
	});
}

export default Component;
