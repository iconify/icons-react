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
		"content": `<style>.px5nr8biq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.082 41.163c-8.967 2.403-18.327-2.213-21.88-10.79s-.198-18.459 7.842-23.1m4.462-1.849a18.5 18.5 0 0 1 22.659 22.658");
}

.to1br1oyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.294 38.793a15.5 15.5 0 0 1-13.423-23.25m2.463-3.21a15.5 15.5 0 0 1 26.46 10.96");
}

.ud3po1bpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.078 34.841a12.5 12.5 0 1 1 4.055-20.387M25.321 25.32l16.473 16.473m1.414-1.413L26.735 23.905m-2.828 2.829L40.38 43.207");
}
</style><path class="px5nr8biq"/><path class="to1br1oyj"/><path class="ud3po1bpk"/>`,
		"fallback": "arcticons:cz-smart-youq",
	});
}

export default Component;
