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
		"content": `<style>.sowi-3bwt {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m54.4 52.8L144 128h16a8 8 0 0 1 0 16h-24v16h24a8 8 0 0 1 0 16h-24v16a8 8 0 0 1-16 0v-16H96a8 8 0 0 1 0-16h24v-16H96a8 8 0 0 1 0-16h16L73.6 76.8a8 8 0 1 1 12.8-9.6l41.6 55.47l41.6-55.47a8 8 0 0 1 12.8 9.6");
}
</style><path class="sowi-3bwt"/>`,
		"fallback": "ph:currency-jpy-fill",
	});
}

export default Component;
