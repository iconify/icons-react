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
		"content": `<style>.ngrgeeg2f {
  fill: currentColor;
  d: path("M4.957 5a1 1 0 0 0-.821 1.571l2.633 3.784a1.5 1.5 0 0 0 2.462 0l2.633-3.784A1 1 0 0 0 11.043 5z");
}
</style><path class="ngrgeeg2f"/>`,
		"fallback": "fluent:caret-down-16-filled",
	});
}

export default Component;
