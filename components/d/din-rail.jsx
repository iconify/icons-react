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
		"content": `<style>.bvqo2_b4m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.5 4.25H5q-2.5 0-2.5 2.5v7.5q0 .881.311 1.452q-.172.123-.329.28q-.732.732-.732 1.768q0 2.5 2.5 2.5h15.5q1.036 0 1.768-.732t.732-1.768t-.732-1.768q-.157-.157-.329-.28q.311-.571.311-1.452v-7.5q0-2.5-2.5-2.5h-.5q-2.5 0-2.5 2.5v7.5q0 .564.127 1h-1.504q.127-.436.127-1v-7.5q0-2.5-2.5-2.5h-.5q-2.5 0-2.5 2.5v7.5q0 .564.127 1H7.8q.2-.459.2-1v-7.5q0-1.036-.732-1.768T5.5 4.25");
}
</style><path class="bvqo2_b4m"/>`,
		"fallback": "uix-solid:din-rail",
	});
}

export default Component;
