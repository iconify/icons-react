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
		"content": `<style>.q8ip5wbzr {
  fill: currentColor;
  d: path("M196 84a32 32 0 0 0-11.22 2A32 32 0 0 0 148 69V44a32 32 0 0 0-64 0v66.83A32 32 0 0 0 32.25 148l4.68 8.24C71.11 216.48 86.72 244 136 244a92.1 92.1 0 0 0 92-92v-36a32 32 0 0 0-32-32m8 68a68.08 68.08 0 0 1-68 68c-34 0-43.49-14.45-78.2-75.65l-4.69-8.28a.2.2 0 0 1 0-.07a8 8 0 0 1 13.86-8c.06.12.13.23.2.35l18.68 30A12 12 0 0 0 108 152V44a8 8 0 0 1 16 0v68a12 12 0 0 0 24 0v-12a8 8 0 0 1 16 0v20a12 12 0 0 0 24 0v-4a8 8 0 0 1 16 0Z");
}
</style><path class="q8ip5wbzr"/>`,
		"fallback": "ph:hand-pointing-bold",
	});
}

export default Component;
