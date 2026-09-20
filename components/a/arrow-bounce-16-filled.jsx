import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d4ervtbmz {
  fill: currentColor;
  d: path("M8.002 4.75a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V6.561l5.718 5.72a.75.75 0 0 0 1.06 0l5.5-5.5a.75.75 0 1 0-1.06-1.061l-4.97 4.97L3.562 5.5h3.69a.75.75 0 0 0 .75-.75");
}
</style><path class="d4ervtbmz"/>`,
		"fallback": "fluent:arrow-bounce-16-filled",
	});
}

export default Component;
