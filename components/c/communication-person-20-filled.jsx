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
		"content": `<style>.k_q8cfp4s {
  fill: currentColor;
  d: path("M10 4.5a6.5 6.5 0 0 0-4.601 11.091a.75.75 0 1 1-1.062 1.06a8 8 0 1 1 13.632-6.355a3 3 0 0 0-1.756-1.21A6.5 6.5 0 0 0 10 4.5m4.637 4.626A5.002 5.002 0 0 0 5 11c0 1.377.558 2.626 1.458 3.53a.75.75 0 0 0 1.063-1.06a3.5 3.5 0 1 1 5.811-3.544a3 3 0 0 1 1.305-.8M8 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9.5 1a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="k_q8cfp4s"/>`,
		"fallback": "fluent:communication-person-20-filled",
	});
}

export default Component;
