import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lcvhzebwu {
  fill: currentColor;
  d: path("M13.5 8a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M11 2a3 3 0 0 1 3 3v2.02A6.5 6.5 0 0 0 7.021 14H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm2.5 8.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M4.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="lcvhzebwu"/>`,
		"fallback": "fluent:card-ui-info-20-filled",
	});
}

export default Component;
