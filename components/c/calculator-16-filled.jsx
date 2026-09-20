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
		"content": `<style>.b1086-gch {
  fill: currentColor;
  d: path("M11.5 1h-7A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 11.5 1m-6 2h5A1.5 1.5 0 0 1 12 4.5v1A1.5 1.5 0 0 1 10.5 7h-5A1.5 1.5 0 0 1 4 5.5v-1A1.5 1.5 0 0 1 5.5 3M6 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0");
}
</style><path class="b1086-gch"/>`,
		"fallback": "fluent:calculator-16-filled",
	});
}

export default Component;
