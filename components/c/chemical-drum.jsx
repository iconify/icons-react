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
		"content": `<style>.k00b1up8t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 3.998Q4.253 1.75 12 1.75q7.75 0 7.75 2.25v16q0 2.25-7.75 2.25T4.25 20zM5.75 7.5h12.5V5.544q-1.91.706-6.25.706t-6.25-.706zm0 1.5v8h12.5V9zm7.841 2.281l.128.128q.66.659.66 1.591t-.66 1.592l-.128.127q-.659.66-1.591.66t-1.591-.66l-.128-.128q-.66-.659-.66-1.591t.66-1.591l.128-.128q.659-.66 1.591-.66t1.591.66M18.25 20v-1.5H5.75V20q0 .75 6.25.75t6.25-.75");
}
</style><path class="k00b1up8t"/>`,
		"fallback": "uix-solid:chemical-drum",
	});
}

export default Component;
