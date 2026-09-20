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
		"content": `<style>.gcqi3_ujf {
  fill: currentColor;
  d: path("M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M8.75 9.5h4.74l-5.268 5.217a.75.75 0 1 0 1.056 1.066L14.5 10.61v4.639a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5");
}
</style><path class="gcqi3_ujf"/>`,
		"fallback": "fluent:arrow-circle-up-right-24-filled",
	});
}

export default Component;
