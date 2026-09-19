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
		"content": `<style>.xg264cbqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.27 33.628h5.443l-2.721-4.004z");
}

.z7-c7pzcr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 8.802h37v24.835H29.467L24 24.407l-5.467 9.23H5.5zm14.053 27.352l-2.054 3.02l13.002.024l-2.07-3.044z");
}
</style><path class="z7-c7pzcr"/><path class="xg264cbqm"/>`,
		"fallback": "arcticons:aerial-tv",
	});
}

export default Component;
