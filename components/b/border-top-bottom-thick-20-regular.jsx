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
		"content": `<style>.e6dd48-uv {
  fill: currentColor;
  d: path("M6 4.502a1.5 1.5 0 0 0-1.396.949a.75.75 0 1 1-1.413-.492h-.005A3 3 0 0 1 6 3.002h8c1.29 0 2.39.814 2.814 1.957h-.003a.75.75 0 0 1-1.381.586l-.004-.01l-.024-.067A1.5 1.5 0 0 0 14 4.502zM3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75M14 15.5H6a1.5 1.5 0 0 1-1.396-.948a.75.75 0 1 0-1.413.492h-.005A3 3 0 0 0 6 17.002h8c1.29 0 2.39-.814 2.814-1.957h-.003a.75.75 0 0 0-1.381-.586l-.004.01l-.024.067a1.5 1.5 0 0 1-1.402.966m1.5-4.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0z");
}
</style><path class="e6dd48-uv"/>`,
		"fallback": "fluent:border-top-bottom-thick-20-regular",
	});
}

export default Component;
