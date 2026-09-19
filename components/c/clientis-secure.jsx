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
		"content": `<style>.bvad8064r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.331 4.5C19.428 9.689 32.233 21.49 41.69 24M11.332 7.896c2.919 4.892 14.464 15.658 23.7 18.98M6.31 10.742c2.96 4.96 14.788 15.959 24.086 19.114");
}

.yf74idb3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.331 43.5C19.428 38.311 32.233 26.51 41.69 24M11.332 40.104c2.919-4.891 14.464-15.658 23.7-18.98M6.31 37.258c2.96-4.96 14.789-15.959 24.086-19.114");
}
</style><path class="bvad8064r"/><path class="yf74idb3v"/>`,
		"fallback": "arcticons:clientis-secure",
	});
}

export default Component;
