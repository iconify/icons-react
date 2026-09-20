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
		"content": `<style>.sl61kdbop {
  fill: currentColor;
  d: path("M22.293 4.293a1 1 0 1 1 1.414 1.414L15.414 14l8.293 8.293a1 1 0 0 1-1.414 1.414L14 15.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L12.586 14L4.293 5.707a1 1 0 0 1 1.414-1.414L14 12.586z");
}
</style><path class="sl61kdbop"/>`,
		"fallback": "fluent:dismiss-28-filled",
	});
}

export default Component;
