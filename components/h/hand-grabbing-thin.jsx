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
		"content": `<style>.e2dqa-bbm {
  fill: currentColor;
  d: path("M188 84a23.87 23.87 0 0 0-16.07 6.2A24 24 0 0 0 128 78.75A24 24 0 0 0 84 92v24H68a24 24 0 0 0-24 24v12a84 84 0 0 0 168 0v-44a24 24 0 0 0-24-24m16 68a76 76 0 0 1-152 0v-12a16 16 0 0 1 16-16h16v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0V92a16 16 0 0 1 32 0v28a4 4 0 0 0 8 0v-12a16 16 0 0 1 32 0Z");
}
</style><path class="e2dqa-bbm"/>`,
		"fallback": "ph:hand-grabbing-thin",
	});
}

export default Component;
