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
		"content": `<style>.vegny2bbg {
  fill: currentColor;
  d: path("M8.77 17V5.616q0-.667.474-1.141Q9.72 4 10.386 4h3.234q.667 0 1.139.475q.472.474.472 1.14V17zm0 2.385v-1h6.46v1z");
}
</style><path class="vegny2bbg"/>`,
		"fallback": "material-symbols-light:general-device",
	});
}

export default Component;
