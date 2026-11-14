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
		"content": `<style>.g7v9ie-xt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 2.75h12q1.76 0 3.005 1.245T22.25 7v6q0 1.76-1.245 3.005q-.692.693-1.544 1q.289.603.289 1.495q0 2.75-2.75 2.75t-2.75-2.75q0-.719.188-1.25H9.562q.188.531.188 1.25q0 2.75-2.75 2.75T4.25 18.5q0-.892.289-1.495q-.852-.307-1.544-1Q1.75 14.76 1.75 13V7q0-1.76 1.245-3.005T6 2.75m6.25 2.75h-.5q-2.5 0-2.5 2.5v4q0 1.036.732 1.768t1.768.732h.5q1.036 0 1.768-.732T14.75 12V8q0-2.5-2.5-2.5");
}
</style><path class="g7v9ie-xt"/>`,
		"fallback": "uix-solid:carriage-loading",
	});
}

export default Component;
