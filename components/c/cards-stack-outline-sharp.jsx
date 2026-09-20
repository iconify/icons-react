import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mvxocipwf {
  fill: currentColor;
  d: path("M10.308 8.5h7v-1h-7zm0 3.154h4v-1h-4zm6.479 5.904h2.219l.057.715l-14.8 1.88L2.731 9.12l1.052-.129l1.351 10.048zM6.616 15.196V4H21v11.196zm1-1H20V5H7.616zm0 0V5zm-2.481 4.842");
}
</style><path class="mvxocipwf"/>`,
		"fallback": "material-symbols-light:cards-stack-outline-sharp",
	});
}

export default Component;
