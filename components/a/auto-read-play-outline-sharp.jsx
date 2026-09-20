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
		"content": `<style>.in2hs_b8r {
  fill: currentColor;
  d: path("m10 14l6-4l-6-4zm-8 8V2h20v16H6zm3.15-6H20V4H4v13.125zM4 16V4z");
}
</style><path class="in2hs_b8r"/>`,
		"fallback": "material-symbols:auto-read-play-outline-sharp",
	});
}

export default Component;
