import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wommm2btg {
  fill: currentColor;
  d: path("M164 136a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1 0-8h28v-28a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m64-56v112a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h29.86L90.3 41.34a12 12 0 0 1 10-5.34h55.44a12 12 0 0 1 10 5.34L178.14 60H208a20 20 0 0 1 20 20m-8 0a12 12 0 0 0-12-12h-32a4 4 0 0 1-3.33-1.78l-13.62-20.44a4 4 0 0 0-3.33-1.78h-55.44A4 4 0 0 0 97 45.78L83.33 66.22A4 4 0 0 1 80 68H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12Z");
}
</style><path class="wommm2btg"/>`,
		"fallback": "ph:camera-plus-thin",
	});
}

export default Component;
