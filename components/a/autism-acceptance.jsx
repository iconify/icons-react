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
		"content": `<style>.gruurhbaf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 13.204q-1.996 2.25-4.91 2.358q-1.629.06-2.671-.805Q3.25 13.785 3.25 12t1.169-2.757q1.042-.865 2.671-.805q2.914.108 4.91 2.358q1.996-2.25 4.91-2.358q1.629-.06 2.671.805q1.169.972 1.169 2.757t-1.169 2.757q-1.042.865-2.671.805q-2.914-.108-4.91-2.358m-.397 7.932Q9.25 19.666 9.25 18q0-1.75 1.75-1.75q.519 0 1 .295q.481-.295 1-.295q1.75 0 1.75 1.75q0 1.666-2.353 3.136q-.089.056-.19.085T12 21.25q-.105 0-.207-.029t-.19-.085");
}
</style><path class="gruurhbaf"/>`,
		"fallback": "uix-solid:autism-acceptance",
	});
}

export default Component;
