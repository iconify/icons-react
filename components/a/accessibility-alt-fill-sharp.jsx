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
		"content": `<style>.oj3nw3btd {
  fill: currentColor;
  d: path("M10 5a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 5M5 9h14a1 1 0 0 1 0 2h-6v2.697l3.832 5.748a1 1 0 0 1-1.664 1.11L12 15.803l-3.168 4.752a1 1 0 0 1-1.664-1.11L11 13.697V11H5a1 1 0 0 1 0-2");
}
</style><path class="oj3nw3btd"/>`,
		"fallback": "coolicons:accessibility-alt-fill-sharp",
	});
}

export default Component;
