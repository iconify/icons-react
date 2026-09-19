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
		"content": `<style>.ibv4yjbyu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.25 24c0-5.937 4.813-10.75 10.75-10.75S34.75 18.063 34.75 24z");
}

.q-rd_1bxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0-11.874-9.626-21.5-21.5-21.5S2.5 12.126 2.5 24S12.126 45.5 24 45.5v-5.375c-8.906 0-16.125-7.22-16.125-16.125S15.095 7.875 24 7.875S40.125 15.095 40.125 24z");
}
</style><path class="q-rd_1bxd"/><path class="ibv4yjbyu"/>`,
		"fallback": "arcticons:elapse",
	});
}

export default Component;
