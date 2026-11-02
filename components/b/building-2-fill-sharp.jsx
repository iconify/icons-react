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
		"content": `<style>.ek7drkb0b {
  fill: currentColor;
  d: path("M4 19V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.586l.293-.293a1 1 0 0 1 1.414 0l5 5A1 1 0 0 1 20 14v5h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm14-4.586l-4-4l-1 1V19h5Z");
}
</style><path class="ek7drkb0b"/>`,
		"fallback": "coolicons:building-2-fill-sharp",
	});
}

export default Component;
