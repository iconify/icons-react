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
		"content": `<style>.fg7eli5wj {
  fill: currentColor;
  d: path("M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m9.854-1.146a.5.5 0 0 0-.708-.708L7.25 9.043L5.854 7.646a.5.5 0 1 0-.708.708l1.75 1.75a.5.5 0 0 0 .708 0z");
}
</style><path class="fg7eli5wj"/>`,
		"fallback": "fluent:checkmark-circle-16-filled",
	});
}

export default Component;
