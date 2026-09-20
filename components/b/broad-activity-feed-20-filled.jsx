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
		"content": `<style>.faqhgbckn {
  fill: currentColor;
  d: path("M3.5 3A1.5 1.5 0 0 0 2 4.5v4A1.5 1.5 0 0 0 3.5 10h13A1.5 1.5 0 0 0 18 8.5v-4A1.5 1.5 0 0 0 16.5 3zm0 9A1.5 1.5 0 0 0 2 13.5v2A1.5 1.5 0 0 0 3.5 17h4A1.5 1.5 0 0 0 9 15.5v-2A1.5 1.5 0 0 0 7.5 12zm9 0a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z");
}
</style><path class="faqhgbckn"/>`,
		"fallback": "fluent:broad-activity-feed-20-filled",
	});
}

export default Component;
