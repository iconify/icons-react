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
		"content": `<style>.yuv4zy4xa {
  fill: currentColor;
  d: path("M8 20V4h8v16z");
}
</style><path class="yuv4zy4xa"/>`,
		"fallback": "material-symbols-light:crop-9-16-sharp",
	});
}

export default Component;
