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
		"content": `<style>.m7objubac {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 2.75h6q2.75 0 2.75 2.75T15 8.25H9q-2.75 0-2.75-2.75T9 2.75m8 6.5H7q-2.75 0-2.75 2.75T7 14.75h10q2.75 0 2.75-2.75T17 9.25m-12 6.5h14q2.75 0 2.75 2.75T19 21.25H5q-2.75 0-2.75-2.75q0-1.139.805-1.945q.806-.805 1.945-.805");
}
</style><path class="m7objubac"/>`,
		"fallback": "uix-solid:data-layers",
	});
}

export default Component;
