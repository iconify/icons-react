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
		"content": `<style>.qeauuuw3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.459 27.496c-.466-5.365-3.633-6.613-3.633-6.613m10.095 2.23c-1.188-5.252-4.495-6.06-4.495-6.06m10.349 2.587c-1.188-5.253-4.495-6.06-4.495-6.06m8.818 2.827c-1.63-5.132-4.994-5.656-4.994-5.656");
}

.y7j__xbnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.54 11.63c1.136 1.481 1.479 4.28-.174 6.483c-4.769 6.359-15.648 14.655-24.62 18.678c-5.111 2.292-9.843 2.22-12.066-.62c-2.263-2.893-1.174-7.073 2.44-10.724c6.13-6.191 16.76-12.997 24.898-15.22c4.26-1.164 7.854-.77 9.522 1.403");
}
</style><path class="y7j__xbnm"/><path class="qeauuuw3m"/>`,
		"fallback": "arcticons:breadboard",
	});
}

export default Component;
