import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wengbsb1h {
  fill: currentColor;
  d: path("M56 104a80 80 0 1 1 80 80a80.09 80.09 0 0 1-80-80m146.46 69.28A96 96 0 0 1 66.72 37.54a8 8 0 1 0-11.54-11.08A112 112 0 0 0 128 215.71V232h-24a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16.28a111.2 111.2 0 0 0 69.54-30.9a8 8 0 1 0-11.08-11.54");
}
</style><path class="wengbsb1h"/>`,
		"fallback": "ph:globe-stand-fill",
	});
}

export default Component;
