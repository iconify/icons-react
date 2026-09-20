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
		"content": `<style>.wtu_0gb9n {
  fill: currentColor;
  d: path("M11.5 14.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM9 20v-2H3V4h18v14h-6v2z");
}
</style><path class="wtu_0gb9n"/>`,
		"fallback": "material-symbols-light:add-to-queue-sharp",
	});
}

export default Component;
