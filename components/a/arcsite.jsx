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
		"content": `<style>.ewn4p-bau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4.5l15.5 39m-31 0l4.453-11.205c.969-2.328 2.743-3.395 5.572-3.395h15.172");
}
</style><path class="ewn4p-bau"/>`,
		"fallback": "arcticons:arcsite",
	});
}

export default Component;
