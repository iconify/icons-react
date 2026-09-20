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
		"content": `<style>.j98an1bqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z");
}

.s7hhl2bwc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.09 30V18h2.037a6 6 0 0 1 0 12zm12.393-11.964h5.982m-5.982 5.982h3.9m-3.9-5.982V30m-22.948-.031V18.004h4.018a4.018 4.018 0 0 1 0 8.037H9.535");
}
</style><path class="j98an1bqd"/><path class="s7hhl2bwc"/>`,
		"fallback": "arcticons:cuprumpdf",
	});
}

export default Component;
