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
		"content": `<style>.xvma4rkca {
  fill: currentColor;
  d: path("M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.354 5.646a.5.5 0 1 0-.708.708L7.293 8L5.646 9.646a.5.5 0 0 0 .708.708L8 8.707l1.646 1.647a.5.5 0 0 0 .708-.708L8.707 8l1.647-1.646a.5.5 0 0 0-.708-.708L8 7.293z");
}
</style><path class="xvma4rkca"/>`,
		"fallback": "fluent:dismiss-circle-16-regular",
	});
}

export default Component;
