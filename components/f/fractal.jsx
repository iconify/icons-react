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
		"content": `<style>.d9rdlg1is {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.95 5.634Q13.301 4.506 12 4.506t-1.95 1.128L3.145 17.628q-.647 1.124.002 2.248q.649 1.123 1.947 1.124h13.813q1.297-.001 1.946-1.124t.002-2.248z");
}
</style><path class="d9rdlg1is"/>`,
		"fallback": "uix-solid:fractal",
	});
}

export default Component;
