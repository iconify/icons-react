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
		"content": `<style>.g9cl7wwof {
  fill: currentColor;
  d: path("M4 20.116V15.45q1.2-.077 2.014-.916t.813-2.092q0-1.13-.823-2.005T4 9.416V4.768h4.685q.155-1.121.957-1.887t1.916-.766q1.108 0 1.91.766t.963 1.887h4.685v4.947q.842.257 1.363 1.011T21 12.442q0 .93-.521 1.674t-1.363 1.053v4.947z");
}
</style><path class="g9cl7wwof"/>`,
		"fallback": "material-symbols-light:extension-sharp",
	});
}

export default Component;
