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
		"content": `<style>.rr6j3fjer {
  fill: currentColor;
  d: path("M2 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5.489l9.514 9.118l9.308-8.843a1 1 0 0 1 1.378 1.45l-10 9.5a1 1 0 0 1-1.38-.003L4 10.343V16a1 1 0 1 1-2 0z");
}
</style><path class="rr6j3fjer"/>`,
		"fallback": "fluent:arrow-bounce-28-filled",
	});
}

export default Component;
