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
		"content": `<style>.ez77h6v-r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12q0 .683-.078 1.334l-.003-.003Q20.339 11.5 17.75 11.5t-4.419 1.831T11.5 17.75t1.831 4.419l.003.003q-.651.078-1.334.078q-4.246 0-7.248-3.002T1.75 12m11 5.75q0-2.071 1.464-3.536q1.465-1.464 3.536-1.464t3.536 1.464q1.464 1.465 1.464 3.536t-1.464 3.536q-1.465 1.464-3.536 1.464t-3.536-1.464q-1.464-1.465-1.464-3.536m1.5 0q0 3.5 3.5 3.5t3.5-3.5t-3.5-3.5t-3.5 3.5m3.5-2.25q-2.25 0-2.25 2.25T17.75 20T20 17.75t-2.25-2.25m0 3q-.75 0-.75-.75t.75-.75t.75.75t-.75.75m.5-.75q0-.5-.5-.5t-.5.5t.5.5t.5-.5");
}
</style><path class="ez77h6v-r"/>`,
		"fallback": "uix-solid:baseball-live",
	});
}

export default Component;
