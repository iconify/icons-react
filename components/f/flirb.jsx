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
		"content": `<style>.ap4f1ba0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.692 38.004V16.876a4.48 4.48 0 0 1 4.481-4.482c2.206 0 3.583.653 4.528 1.875m-12.806 6.768h8.963");
}

.z7d58p2de {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.108 24c0 3.31-.754 6.442-2.1 9.236c-.839 1.74 1.842 7.87.584 9.308c-1.448 1.655-6.895-1.44-8.786-.297a21.2 21.2 0 0 1-11.002 3.057C12.038 45.304 2.5 35.766 2.5 24S12.038 2.696 23.804 2.696S45.108 12.234 45.108 24");
}
</style><path class="z7d58p2de"/><path class="ap4f1ba0g"/>`,
		"fallback": "arcticons:flirb",
	});
}

export default Component;
