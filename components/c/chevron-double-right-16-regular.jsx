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
		"content": `<style>.zo3z3la_c {
  fill: currentColor;
  d: path("M3.646 3.146a.5.5 0 0 1 .707 0l4.5 4.5a.504.504 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.707-.707L7.793 8L3.646 3.854a.5.5 0 0 1 0-.708m4 0a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1 .136.45a.5.5 0 0 1-.136.258l-4.5 4.5a.5.5 0 0 1-.708-.707L11.793 8L7.646 3.854a.5.5 0 0 1 0-.708");
}
</style><path class="zo3z3la_c"/>`,
		"fallback": "fluent:chevron-double-right-16-regular",
	});
}

export default Component;
