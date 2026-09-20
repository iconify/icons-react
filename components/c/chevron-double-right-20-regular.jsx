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
		"content": `<style>.gtik_l1ol {
  fill: currentColor;
  d: path("M4.646 4.146a.5.5 0 0 1 .708 0l5.5 5.5a.5.5 0 0 1 0 .707l-5.5 5.5a.5.5 0 1 1-.708-.707L9.793 10L4.646 4.854a.5.5 0 0 1 0-.708m5 0a.5.5 0 0 1 .707 0l5.5 5.5a.5.5 0 0 1 0 .707l-5.5 5.5a.5.5 0 1 1-.707-.707L14.793 10L9.646 4.854a.5.5 0 0 1 0-.708");
}
</style><path class="gtik_l1ol"/>`,
		"fallback": "fluent:chevron-double-right-20-regular",
	});
}

export default Component;
