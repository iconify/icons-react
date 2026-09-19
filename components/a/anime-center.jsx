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
		"content": `<style>.ad5hqfbcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.62 34.75v-21.5L24 2.5L5.38 13.25v21.5L24 45.5zm-4.331-19L24 7.5m0 33l14.289-8.25M9.711 15.75v16.5");
}

.bbziydija {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.678 17.203A8.254 8.254 0 0 0 16.136 21.5m-.016 4.953a8.25 8.25 0 1 0 14.676-7.13");
}

.fc-zz4bzi {
  cx: 29.75px;
  cy: 18.25px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qhuea4bzl {
  cx: 15.75px;
  cy: 24px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="ad5hqfbcm"/><path class="bbziydija"/><circle class="qhuea4bzl"/><circle class="fc-zz4bzi"/>`,
		"fallback": "arcticons:anime-center",
	});
}

export default Component;
