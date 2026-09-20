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
		"content": `<style>.l2idmd51c {
  fill: currentColor;
  d: path("M11 21a1 1 0 0 1 0-2h6.586L3.293 4.707a1 1 0 0 1 1.414-1.414L19 17.586V11a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1z");
}
</style><path class="l2idmd51c"/>`,
		"fallback": "fluent:arrow-down-right-24-filled",
	});
}

export default Component;
