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
		"content": `<style>.wcoxksbxs {
  fill: currentColor;
  d: path("M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zm0 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-1.092-7.166a.5.5 0 0 1 .472-.334h1.18a.5.5 0 0 1 .474.658l-.28.842H16a.5.5 0 0 1 .42.77l-2.25 3.5a.5.5 0 0 1-.902-.401L13.776 15H13a.5.5 0 0 1-.472-.666z");
}
</style><path class="wcoxksbxs"/>`,
		"fallback": "fluent:calendar-assistant-20-filled",
	});
}

export default Component;
