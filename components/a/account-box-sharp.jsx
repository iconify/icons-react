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
		"content": `<style>.shjmunbnl {
  fill: currentColor;
  d: path("M14.129 12.206q.871-.871.871-2.129t-.871-2.129T12 7.077t-2.129.871T9 10.077t.871 2.129t2.129.871t2.129-.871M4 20V4h16v16zm1-1h14v-.766q-1.35-1.325-3.137-2.087T12 15.385t-3.863.762T5 18.235z");
}
</style><path class="shjmunbnl"/>`,
		"fallback": "material-symbols-light:account-box-sharp",
	});
}

export default Component;
