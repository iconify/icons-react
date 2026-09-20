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
		"content": `<style>.t1nd-2bca {
  fill: currentColor;
  d: path("M6 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 4a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M7.25 12a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M10 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M11.25 8a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M10 13.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M11.25 16a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M14 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M15.25 8a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M14 13.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5");
}
</style><path class="t1nd-2bca"/>`,
		"fallback": "fluent:dialpad-20-filled",
	});
}

export default Component;
