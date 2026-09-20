import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b0k68cbdr {
  fill: currentColor;
  d: path("M3.201 8.735a.75.75 0 1 0 1.09 1.03l4.955-5.239V17.25a.75.75 0 0 0 1.5 0V4.524l4.957 5.241a.75.75 0 1 0 1.09-1.03l-6.07-6.418a1 1 0 0 0-.566-.3a.75.75 0 0 0-.328.002a1 1 0 0 0-.558.298z");
}
</style><path class="b0k68cbdr"/>`,
		"fallback": "fluent:arrow-up-20-filled",
	});
}

export default Component;
