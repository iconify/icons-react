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
		"content": `<style>.rscekt69m {
  fill: currentColor;
  d: path("M9.5 9a3 3 0 0 1 3-3H2v5.5A2.5 2.5 0 0 0 4.5 14h3.538A3 3 0 0 1 8 13.5a2.5 2.5 0 0 1 2.273-2.49A3 3 0 0 1 9.5 9M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V5h12zm.5 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S9 14.75 9 13.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="rscekt69m"/>`,
		"fallback": "fluent:calendar-person-16-filled",
	});
}

export default Component;
