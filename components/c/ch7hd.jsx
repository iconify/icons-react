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
		"content": `<style>.ppcsw9bxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.098 20.565c.282-.807 1.765-1.228 3.044-.473c1.149.679 2.047-.08 3.035-.67v1.618c0 1.434-2.934 2.655-2.934 4.266v1.43m-3.288-5.347v-2.023m15.31 9.996c0 6.773-5.491 12.264-12.265 12.265c-6.774 0-12.265-5.491-12.266-12.265S17.226 17.096 24 17.096s12.266 5.492 12.266 12.266zm-6.234-10.724c0 6.774-5.491 12.265-12.265 12.266S5.5 25.412 5.5 18.638S10.992 6.373 17.766 6.373c6.773.001 12.263 5.492 12.264 12.265zm12.469 0c0 6.774-5.492 12.266-12.266 12.266c-6.773-.001-12.264-5.493-12.264-12.266S23.46 6.374 30.234 6.373c6.774 0 12.265 5.491 12.266 12.265");
}
</style><path class="ppcsw9bxj"/>`,
		"fallback": "arcticons:ch7hd",
	});
}

export default Component;
