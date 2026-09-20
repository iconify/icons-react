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
		"content": `<style>.lyyk5rb4s {
  fill: currentColor;
  d: path("M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75m8 3a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.72-.53a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06L5 9.56v5.69a.75.75 0 0 0 1.5 0V9.56l1.22 1.22a.75.75 0 1 0 1.06-1.06z");
}
</style><path class="lyyk5rb4s"/>`,
		"fallback": "fluent:arrow-collapse-all-20-filled",
	});
}

export default Component;
