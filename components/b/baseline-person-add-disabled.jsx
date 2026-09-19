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
		"content": `<style>.ghn-6bc_f {
  fill: currentColor;
  d: path("M23 20v-2c0-2.3-4.1-3.7-6.9-3.9l6 5.9zm-11.6-5.5C9.2 15.1 7 16.3 7 18v2h9.9l4 4l1.3-1.3l-21-20.9L0 3.1l4 4V10H1v2h3v3h2v-3h2.9zM6 10v-.9l.9.9z");
}

.ymn00fgdm {
  cx: 15px;
  cy: 8px;
  r: 4px;
  fill: currentColor;
}
</style><circle class="ymn00fgdm"/><path class="ghn-6bc_f"/>`,
		"fallback": "ic:baseline-person-add-disabled",
	});
}

export default Component;
