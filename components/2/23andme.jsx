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
		"content": `<style>.p4nzbtbdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.557 3.5L15.443 37.534m1.079-29.202L27.356 44.5");
}
</style><path class="p4nzbtbdr"/>`,
		"fallback": "arcticons:23andme",
	});
}

export default Component;
