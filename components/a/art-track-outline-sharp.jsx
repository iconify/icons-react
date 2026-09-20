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
		"content": `<style>.ki0p0m5av {
  fill: currentColor;
  d: path("M15 19H1V5h14zM3 17h10V7H3zm14 2V5h2v14zm4 0V5h2v14zM4 15h8l-2.6-3.5L7.5 14l-1.4-1.85zM3 7v10z");
}
</style><path class="ki0p0m5av"/>`,
		"fallback": "material-symbols:art-track-outline-sharp",
	});
}

export default Component;
