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
		"content": `<style>.d4lgrxbqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.566 43.5l1.166-2.497M18.366 4.5h3.815l13.455 36.492l2.497 1.167M20.86 9.514L11.963 30.92m13.752-8.101l-1.021-2.69l-7.892-.02M9.867 30.92h4.004m6.516-22.735l1.284 3.611m2.695 7.412l1.285 3.611");
}
</style><path class="d4lgrxbqm"/>`,
		"fallback": "arcticons:aelf",
	});
}

export default Component;
