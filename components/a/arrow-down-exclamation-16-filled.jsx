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
		"content": `<style>.hc611eb3p {
  fill: currentColor;
  d: path("M4.5 1A2.5 2.5 0 0 0 2 3.5c0 2.318.67 4.768 1.036 5.938c.203.65.806 1.062 1.464 1.062s1.261-.412 1.464-1.062C6.33 8.268 7 5.818 7 3.5A2.5 2.5 0 0 0 4.5 1M2.75 13.25a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M12 1.5a.5.5 0 0 0-1 0v11.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 13.293z");
}
</style><path class="hc611eb3p"/>`,
		"fallback": "fluent:arrow-down-exclamation-16-filled",
	});
}

export default Component;
