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
		"content": `<style>.usmfuqfxg {
  fill: currentColor;
  d: path("M14 5a8.96 8.96 0 0 0-5.658 2H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1.013V4a1 1 0 0 1 2 0v1.514A10.96 10.96 0 0 1 14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14q0-.555.054-1.099a1 1 0 1 1 1.99.198Q5 13.543 5 14a9 9 0 1 0 9-9m1 3a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3z");
}
</style><path class="usmfuqfxg"/>`,
		"fallback": "fluent:history-28-filled",
	});
}

export default Component;
