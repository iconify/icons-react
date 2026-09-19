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
		"content": `<style>.c4hn46bry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.78 37.272h23.98c13.018 0 10.842-19.588-2.216-15.235c0-10.882-19.588-10.882-19.588 2.176C2.074 22.037 2.074 37.272 10.78 37.272");
}

.vghl2cm9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.273 27.477L24 30.75l-3.273-3.273M24 30.75v-9.998m-5.758 12h11.516");
}
</style><path class="c4hn46bry"/><path class="vghl2cm9u"/>`,
		"fallback": "arcticons:1dm",
	});
}

export default Component;
