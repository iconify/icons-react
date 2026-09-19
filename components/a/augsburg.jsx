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
		"content": `<style>.fvmhnjrvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.041 29.131H21.996m-6.042 12.414l11.624-35.09l11.623 35.09M27.442 6.455h-3.183m6.341 0L42.5 41.41M16.883 16.082c0-4.183-5.691-9.627-5.691-9.627S5.5 11.899 5.5 16.082a5.691 5.691 0 0 0 11.383 0");
}
</style><path class="fvmhnjrvx"/>`,
		"fallback": "arcticons:augsburg",
	});
}

export default Component;
