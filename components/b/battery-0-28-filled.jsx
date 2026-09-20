import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jq1ujybpt {
  fill: currentColor;
  d: path("M5.75 7A3.75 3.75 0 0 0 2 10.75v6.5A3.75 3.75 0 0 0 5.75 21h14.5A3.75 3.75 0 0 0 24 17.25V16h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1v-1.25A3.75 3.75 0 0 0 20.25 7z");
}
</style><path class="jq1ujybpt"/>`,
		"fallback": "fluent:battery-0-28-filled",
	});
}

export default Component;
