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
		"content": `<style>.fqct5pbki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.602 24.617l-6.735 12.516h6.735ZM8.219 14.443l6.566-3.576m0 0v26.266m11.541 0l14.133-26.266H23.058");
}
</style><path class="fqct5pbki"/>`,
		"fallback": "arcticons:a17track",
	});
}

export default Component;
