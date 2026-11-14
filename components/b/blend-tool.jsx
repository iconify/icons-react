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
		"content": `<style>.ml_nwrbcr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 1.75h2.25q1.036 0 1.768.732t.732 1.768V6.5q0 1.036-.732 1.768T19.75 9H17.5Q15 9 15 6.5V4.25q0-2.5 2.5-2.5M15.25 12q0-3.25-3.25-3.25T8.75 12T12 15.25T15.25 12M2 18.25q0-3.75 3.75-3.75t3.75 3.75T5.75 22T2 18.25");
}
</style><path class="ml_nwrbcr"/>`,
		"fallback": "uix-solid:blend-tool",
	});
}

export default Component;
