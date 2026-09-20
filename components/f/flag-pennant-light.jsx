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
		"content": `<style>.zcm1aacul {
  fill: currentColor;
  d: path("m242 98.33l-184-64A6 6 0 0 0 50 40v176a6 6 0 0 0 12 0v-43.73l180-62.6a6 6 0 0 0 0-11.34M62 159.56V48.44L221.74 104Z");
}
</style><path class="zcm1aacul"/>`,
		"fallback": "ph:flag-pennant-light",
	});
}

export default Component;
