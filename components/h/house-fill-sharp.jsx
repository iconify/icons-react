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
		"content": `<style>.sl6q8acnk {
  fill: currentColor;
  d: path("m12.707 2.293l8 8A1 1 0 0 1 21 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11c0-.265.105-.52.293-.707l8-8a1 1 0 0 1 1.414 0");
}
</style><path class="sl6q8acnk"/>`,
		"fallback": "coolicons:house-fill-sharp",
	});
}

export default Component;
