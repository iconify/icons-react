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
		"content": `<style>.rt79eobkw {
  fill: currentColor;
  d: path("M19 4h-4L7.11 16.63L4.5 12L9 4H5L.5 12L5 20h4l7.89-12.63L19.5 12L15 20h4l4.5-8z");
}
</style><path class="rt79eobkw"/>`,
		"fallback": "ic:baseline-polymer",
	});
}

export default Component;
