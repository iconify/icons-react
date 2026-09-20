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
		"content": `<style>.u9_2bh1qp {
  fill: currentColor;
  d: path("M4.957 10.998a1 1 0 0 1-.821-1.571l2.633-3.784a1.5 1.5 0 0 1 2.462 0l2.633 3.784a1 1 0 0 1-.821 1.571z");
}
</style><path class="u9_2bh1qp"/>`,
		"fallback": "fluent:caret-up-16-filled",
	});
}

export default Component;
