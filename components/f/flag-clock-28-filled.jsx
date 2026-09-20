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
		"content": `<style>.xqva38byh {
  fill: currentColor;
  d: path("M5.5 18h7.927a7.5 7.5 0 0 1 8.075-4.934L19.886 10.5l3.999-6.35A.75.75 0 0 0 23.25 3H4.75a.75.75 0 0 0-.75.75v20.5a.75.75 0 0 0 1.5 0zM27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6.5-4a.5.5 0 0 0-.5.5v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H21v-3a.5.5 0 0 0-.5-.5");
}
</style><path class="xqva38byh"/>`,
		"fallback": "fluent:flag-clock-28-filled",
	});
}

export default Component;
