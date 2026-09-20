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
		"content": `<style>.q1gtk8b-k {
  fill: currentColor;
  d: path("M6.03 5.22a.75.75 0 0 1 0 1.06L4.56 7.75h6.88L9.97 6.28a.75.75 0 0 1 1.06-1.06l2.75 2.75a.75.75 0 0 1 0 1.06l-2.75 2.75a.75.75 0 1 1-1.06-1.06l1.47-1.47H4.56l1.47 1.47a.75.75 0 1 1-1.06 1.06L2.22 9.03a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 0 1 1.06 0");
}
</style><path class="q1gtk8b-k"/>`,
		"fallback": "fluent:arrow-bidirectional-left-right-16-filled",
	});
}

export default Component;
