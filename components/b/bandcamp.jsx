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
		"content": `<style>.wa5cc8btk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.94 12.49H43.5L31.06 35.51H4.5z");
}
</style><path class="wa5cc8btk"/>`,
		"fallback": "arcticons:bandcamp",
	});
}

export default Component;
