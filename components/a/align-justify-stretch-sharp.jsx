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
		"content": `<style>.r9mg90h5a {
  fill: currentColor;
  d: path("M20 21V3h1v18zM3 21V3h1v18zm9.5-11.5v-2h5v2zm-6 0v-2h5v2zm6 7v-2h5v2zm-6 0v-2h5v2z");
}
</style><path class="r9mg90h5a"/>`,
		"fallback": "material-symbols-light:align-justify-stretch-sharp",
	});
}

export default Component;
