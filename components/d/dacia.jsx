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
		"content": `<style>.zptdxwmha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 18.479H28.182L24 22.66l-4.182-4.181H7.5m0 11.042h12.318L24 25.34l4.182 4.181H40.5");
}
</style><path class="zptdxwmha"/>`,
		"fallback": "arcticons:dacia",
	});
}

export default Component;
