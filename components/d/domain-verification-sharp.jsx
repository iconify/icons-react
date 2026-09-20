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
		"content": `<style>.w7_s83blr {
  fill: currentColor;
  d: path("m10.95 15.82l4.958-4.959l-.72-.719l-4.238 4.239l-2.138-2.139l-.72.72zM4 8h16V6H4zM3 19V5h18v14z");
}
</style><path class="w7_s83blr"/>`,
		"fallback": "material-symbols-light:domain-verification-sharp",
	});
}

export default Component;
