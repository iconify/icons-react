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
		"content": `<style>.jgc8up6-p {
  fill: currentColor;
  d: path("M5 14h9V7H5zm-3 6V4h20v16z");
}
</style><path class="jgc8up6-p"/>`,
		"fallback": "material-symbols:featured-video-sharp",
	});
}

export default Component;
