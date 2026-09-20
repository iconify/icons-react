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
		"content": `<style>.uvuoi1jgw {
  fill: currentColor;
  d: path("M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-1.75 8a1.25 1.25 0 1 1-2.499 0a1.25 1.25 0 0 1 2.499 0m6 0a1.25 1.25 0 1 1-2.499 0a1.25 1.25 0 0 1 2.499 0M7.5 15.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75");
}
</style><path class="uvuoi1jgw"/>`,
		"fallback": "fluent:emoji-meh-24-filled",
	});
}

export default Component;
