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
		"content": `<style>.havp7tbhf {
  fill: currentColor;
  d: path("M15.53 17.46L12 21l-3.53-3.54c.9-.9 2.15-1.46 3.53-1.46s2.63.56 3.53 1.46");
}
</style><path class="havp7tbhf"/>`,
		"fallback": "ic:baseline-wifi-1-bar",
	});
}

export default Component;
