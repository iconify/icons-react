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
		"content": `<style>.df3rh7u9l {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm3.236 3.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M13 8a3 3 0 1 0 6 0a3 3 0 0 0-6 0M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0M5 16v.001a3 3 0 1 0 6 0A3 3 0 0 0 5 16m8 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m8 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0");
}
</style><path class="df3rh7u9l"/>`,
		"fallback": "coolicons:cooktop-fill-sharp",
	});
}

export default Component;
