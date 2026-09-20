import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w6ff2mpei {
  fill: currentColor;
  d: path("M18.789 14.789L16 12l2.789-2.789l.707.689l-1.594 1.6h3.887v1h-3.887l1.594 1.6zM3.23 21V3h11v18zm1-9.206q.392-.39.902-.592T6.23 11h5q.588 0 1.098.202t.902.592V4h-9zm3.434-3.228Q7.23 8.133 7.23 7.5t.434-1.066Q8.098 6 8.73 6t1.066.434t.434 1.066t-.434 1.066T8.731 9t-1.066-.434M8.23 18.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2z");
}
</style><path class="w6ff2mpei"/>`,
		"fallback": "material-symbols-light:inpatient-sharp",
	});
}

export default Component;
