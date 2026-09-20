import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r8ax41b1g {
  fill: currentColor;
  d: path("M3 9.25C3 8.56 3.56 8 4.25 8h23.5a1.25 1.25 0 1 1 0 2.5H4.25C3.56 10.5 3 9.94 3 9.25m4 7c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5H8.25c-.69 0-1.25-.56-1.25-1.25M12.25 22a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="r8ax41b1g"/>`,
		"fallback": "fluent:filter-32-filled",
	});
}

export default Component;
