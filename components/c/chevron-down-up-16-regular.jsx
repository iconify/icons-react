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
		"content": `<style>.r1w8liblu {
  fill: currentColor;
  d: path("m11.854 3.354l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L8 5.793l3.146-3.147a.5.5 0 0 1 .708.708m0 9.292l-3.5-3.5a.5.5 0 0 0-.708 0l-3.5 3.5a.5.5 0 0 0 .708.708L8 10.207l3.146 3.147a.5.5 0 0 0 .708-.708");
}
</style><path class="r1w8liblu"/>`,
		"fallback": "fluent:chevron-down-up-16-regular",
	});
}

export default Component;
