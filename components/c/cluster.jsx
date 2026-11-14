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
		"content": `<style>.k5f8bhjor {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.25 1.75h-2.5q-2.5 0-2.5 2.5v2.5q0 1.396.78 2.013L6.036 14.75H4.25q-2.5 0-2.5 2.5v2.5q0 1.036.732 1.768t1.768.732h2.5q1.036 0 1.768-.732t.732-1.768v-.5h5.5v.5q0 1.036.732 1.768t1.768.732h2.5q1.036 0 1.768-.732t.732-1.768v-2.5q0-1.036-.732-1.768t-1.768-.732h-1.786l-3.062-6.123q.059-.052.116-.109q.732-.732.732-1.768v-2.5q0-1.036-.732-1.768T13.25 1.75m.28 7.486l2.808 5.617q-1.588.405-1.588 2.397v.5h-5.5v-.5q0-1.992-1.588-2.397l2.806-5.611q.137.008.282.008h2.5q.143 0 .28-.014");
}
</style><path class="k5f8bhjor"/>`,
		"fallback": "uix-solid:cluster",
	});
}

export default Component;
