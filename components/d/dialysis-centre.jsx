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
		"content": `<style>.g3o103n5y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.6 2.05q2.4 3.2 2.4 4.7q0 3-3 3t-3-3q0-1.5 2.4-4.7q.044-.059.099-.108q.055-.05.119-.087q.063-.038.133-.063q.07-.024.143-.034t.147-.007t.145.022t.138.051t.126.076q.086.064.15.15m-5.476 5.034Q12.568 4.75 9.5 4.75q-3.235 0-5.124 2.834Q2.75 10.023 2.75 13.5q0 3.71 1.909 6.15q2.035 2.6 5.341 2.6q2.906 0 4.256-1.8q1.383-1.843.13-3.847l-.012-.019q-1.723-2.584 0-5.168l.012-.019q1.265-2.023-.262-4.313");
}
</style><path class="g3o103n5y"/>`,
		"fallback": "uix-solid:dialysis-centre",
	});
}

export default Component;
