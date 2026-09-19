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
		"content": `<style>.axcnbfdgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 11.767a5.6 5.6 0 0 0-5.602-5.602H5.5a5.6 5.6 0 0 0 5.603 5.602z");
}

.h2s9k9bqy {
  cx: 24px;
  cy: 26.801px;
  r: 15.034px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rwf38yblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 11.767a5.6 5.6 0 0 1 5.603-5.602H42.5a5.6 5.6 0 0 1-5.602 5.602z");
}
</style><circle class="h2s9k9bqy"/><path class="rwf38yblb"/><path class="axcnbfdgy"/>`,
		"fallback": "arcticons:huckleberry",
	});
}

export default Component;
