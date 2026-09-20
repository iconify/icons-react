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
		"content": `<style>.jxvisybsm {
  fill: currentColor;
  d: path("M7.445 2.168a1 1 0 0 1 1.387.277l9.283 13.924a5 5 0 1 1-1.663 1.11L14 13.802l-2.451 3.679a5 5 0 1 1-1.663-1.11l2.913-4.372l-5.63-8.443a1 1 0 0 1 .277-1.387M8 18a3 3 0 1 0 1.812.608l-.149-.105A3 3 0 0 0 8 18m12 0c-.617 0-1.187.185-1.663.503l-.148.105A3 3 0 1 0 20 18m-.832-15.555a1 1 0 0 1 1.664 1.11l-5.03 7.543L14.6 9.295z");
}
</style><path class="jxvisybsm"/>`,
		"fallback": "fluent:cut-28-filled",
	});
}

export default Component;
