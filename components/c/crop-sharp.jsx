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
		"content": `<style>.eg3tkuwdo {
  fill: currentColor;
  d: path("M17 23v-4H5V7H1V5h4V1h2v16h16v2h-4v4zm0-8V7H9V5h10v10z");
}
</style><path class="eg3tkuwdo"/>`,
		"fallback": "material-symbols:crop-sharp",
	});
}

export default Component;
