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
		"content": `<style>.qrv--_b-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21.644v1.971a18.3 18.3 0 0 1-18.336 18.348h-.328A18.3 18.3 0 0 1 5.5 23.615v-1.97l8.356-.003v2.136c0 5.68 4.484 10.254 10.054 10.254h.18c5.57 0 10.053-4.573 10.053-10.254v-2.136zm-28.643-3.879V6.037H5.5v11.73zm20.287 0V6.037H42.5v11.73z");
}
</style><path class="qrv--_b-s"/>`,
		"fallback": "arcticons:imou-life",
	});
}

export default Component;
