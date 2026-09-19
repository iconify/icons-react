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
		"content": `<style>.hzx0bdc7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.927 35.728V12.379M29.77 6.408L9.455 18.136m6.773 0a6.771 6.771 0 1 0 0 11.728l20.314-11.728a6.771 6.771 0 1 0-10.157-5.864v23.456a6.771 6.771 0 1 0 10.157-5.864zM9.457 29.864l20.221 11.675");
}
</style><path class="hzx0bdc7n"/>`,
		"fallback": "arcticons:coconala",
	});
}

export default Component;
