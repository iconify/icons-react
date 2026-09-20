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
		"content": `<style>.xzjikn-4s {
  fill: currentColor;
  d: path("M86 152v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m172.44 26l-160-176a6 6 0 0 0-8.88 8L114 121.52V200a6 6 0 0 0 12 0v-65.28l28 30.8V200a6 6 0 0 0 12 0v-21.28L203.56 220a6 6 0 0 0 8.88-8.08ZM160 121.63a6 6 0 0 0 6-6V72a6 6 0 0 0-12 0v43.63a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v127.63a6 6 0 0 0 6 6");
}
</style><path class="xzjikn-4s"/>`,
		"fallback": "ph:cell-signal-slash-light",
	});
}

export default Component;
