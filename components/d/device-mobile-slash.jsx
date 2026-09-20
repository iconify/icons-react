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
		"content": `<style>.ou6f2-bfz {
  fill: currentColor;
  d: path("m213.92 210.62l-160-176a8 8 0 1 0-11.84 10.76L56 60.69V216a24 24 0 0 0 24 24h96a24 24 0 0 0 23.82-21.11l2.26 2.49a8 8 0 1 0 11.84-10.76M184 216a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V78.29l112 123.2ZM68.7 24a8 8 0 0 1 8-8H176a24 24 0 0 1 24 24v110.83a8 8 0 1 1-16 0V40a8 8 0 0 0-8-8H76.7a8 8 0 0 1-8-8");
}
</style><path class="ou6f2-bfz"/>`,
		"fallback": "ph:device-mobile-slash",
	});
}

export default Component;
