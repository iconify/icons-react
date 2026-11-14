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
		"content": `<style>.uf05d9bav {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.018 5.982Q5.286 5.25 4.25 5.25q-2.5 0-2.5 2.5v8.5q0 1.036.732 1.768t1.768.732t1.768-.732t.732-1.768v-3.5h1.278q.236 2 2.472 2h3q2.236 0 2.472-2h1.278v3.5q0 2.5 2.5 2.5q1.036 0 1.768-.732t.732-1.768v-8.5q0-1.036-.732-1.768T19.75 5.25q-2.5 0-2.5 2.5v3.5h-1.278q-.236-2-2.472-2h-3q-1.036 0-1.768.732q-.548.549-.686 1.268H6.75v-3.5q0-1.036-.732-1.768");
}
</style><path class="uf05d9bav"/>`,
		"fallback": "uix-solid:axle-bar",
	});
}

export default Component;
