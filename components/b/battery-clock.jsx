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
		"content": `<style>.hswu60ftd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.625 4.25h-7.75q-2.123 0-3.624 1.501T1.75 9.375v5.25q0 2.123 1.501 3.624t3.624 1.501h7.75q2.123 0 3.624-1.501q1.275-1.275 1.467-2.999h.784q1.75 0 1.75-1.75v-3q0-1.75-1.75-1.75h-.784q-.192-1.724-1.467-2.999q-1.501-1.501-3.624-1.501M7.391 8.641Q8.782 7.25 10.75 7.25t3.359 1.391T15.5 12t-1.391 3.359t-3.359 1.391t-3.359-1.391T6 12t1.391-3.359M20.5 13.75h-.75v-3.5h.75q.25 0 .25.25v3q0 .25-.25.25");
}
</style><path class="hswu60ftd"/>`,
		"fallback": "uix-solid:battery-clock",
	});
}

export default Component;
