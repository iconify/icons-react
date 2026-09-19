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
		"content": `<style>.mxc6vr24n {
  cx: 12px;
  cy: 10px;
  r: 3px;
  fill: currentColor;
}

.x78t-5ygy {
  fill: currentColor;
  d: path("M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10z");
}
</style><path class="x78t-5ygy"/><circle class="mxc6vr24n"/>`,
		"fallback": "ic:baseline-remember-me",
	});
}

export default Component;
