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
		"content": `<style>.c6l8r-bqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.742 34.06L9.213 10.642");
}

.jn-s1-bbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.73 8.125a27.06 27.06 0 0 1 27.057 0M15.82 15.209a18.88 18.88 0 0 1 18.877 0M19.91 22.293a10.7 10.7 0 0 1 10.697 0");
}

.t4d76fbow {
  cx: 17.293px;
  cy: 37.208px;
  r: 6.292px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="jn-s1-bbo"/><circle class="t4d76fbow"/><path class="c6l8r-bqx"/>`,
		"fallback": "arcticons:bose-soundtouch",
	});
}

export default Component;
