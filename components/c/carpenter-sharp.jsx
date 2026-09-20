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
		"content": `<style>.ehpkw1_-p {
  fill: currentColor;
  d: path("m14.075 22.7l-4.25-4.225l1.425-1.425L3.1 5.4L7 1.5l14.15 14.125zm0-2.825L18.3 15.65l-1.4-1.425l-4.25 4.25z");
}
</style><path class="ehpkw1_-p"/>`,
		"fallback": "material-symbols:carpenter-sharp",
	});
}

export default Component;
