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
		"content": `<style>.wat64urvh {
  fill: currentColor;
  d: path("M3.039 16q-.441 0-.74-.299T2 14.961V8.5q0-.213.143-.357T2.5 8t.357.143T3 8.5V15h8.5V9.039q0-.441.299-.74t.74-.299H19q1.246 0 2.123.877T22 11v3.962q0 .44-.299.739t-.74.299zM8.5 12.5q.616-.615.616-1.5T8.5 9.5T7 8.885T5.5 9.5T4.885 11t.615 1.5t1.5.616t1.5-.616");
}
</style><path class="wat64urvh"/>`,
		"fallback": "material-symbols-light:airline-seat-individual-suite-rounded",
	});
}

export default Component;
