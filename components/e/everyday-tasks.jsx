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
		"content": `<style>.aw8cc5alt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.272 18.654A20 20 0 0 1 44 24h0a20 20 0 1 1-8.678-16.487");
}

.gwu91igie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.873 24.204l7.295 7.376l22.34-23.092");
}
</style><path class="aw8cc5alt"/><path class="gwu91igie"/>`,
		"fallback": "arcticons:everyday-tasks",
	});
}

export default Component;
