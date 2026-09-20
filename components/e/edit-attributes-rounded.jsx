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
		"content": `<style>.rtbhfkb-q {
  fill: currentColor;
  d: path("M7 17q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h10q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17zm1.75-3.4l2.325-2.325q.225-.225.225-.525t-.225-.525T10.55 10t-.525.225L8.05 12.2l-.475-.475Q7.35 11.5 7.05 11.5t-.525.225t-.225.525t.225.525l.825.825q.3.3.7.3t.7-.3");
}
</style><path class="rtbhfkb-q"/>`,
		"fallback": "material-symbols:edit-attributes-rounded",
	});
}

export default Component;
