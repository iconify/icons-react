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
		"content": `<style>.lyq0xx-xq {
  fill: currentColor;
  d: path("M8.77 17V5.616q0-.667.474-1.141Q9.72 4 10.386 4h3.234q.667 0 1.139.475q.472.474.472 1.14V17zm1-1h4.46V5.616q0-.27-.172-.443Q13.885 5 13.616 5h-3.231q-.27 0-.443.173t-.173.443zm-1 3.385v-1h6.46v1zm1-3.385h4.46z");
}
</style><path class="lyq0xx-xq"/>`,
		"fallback": "material-symbols-light:general-device-outline",
	});
}

export default Component;
