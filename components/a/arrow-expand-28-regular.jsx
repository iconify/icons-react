import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yf_ytoj-w {
  fill: currentColor;
  d: path("M8.776 18.168a.75.75 0 0 1 1.056 1.056l-.052.056l-4.22 4.22h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.22-4.22zm9.444.052a.75.75 0 0 1 1.004-.052l.056.052l4.22 4.22v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-4.22-4.22l-.052-.056a.75.75 0 0 1 .052-1.004M8.25 3a.75.75 0 0 1 0 1.5H5.56l4.22 4.22l.052.056a.75.75 0 0 1-1.056 1.056L8.72 9.78L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 3.75 3zm16 0a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.22 4.22l-.056.052a.75.75 0 0 1-1.056-1.056l.052-.056l4.22-4.22h-2.69a.75.75 0 0 1 0-1.5z");
}
</style><path class="yf_ytoj-w"/>`,
		"fallback": "fluent:arrow-expand-28-regular",
	});
}

export default Component;
