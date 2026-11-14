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
		"content": `<style>.jfkpvyb6x {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.75 1.75h4.5q2.5 0 2.5 2.5v.5q0 2.236-2 2.472V19.5q0 2.75-2.75 2.75T9.25 19.5V7.222q-2-.236-2-2.472v-.5q0-2.5 2.5-2.5m1 7.789l2.5-.625V7.25h-2.5zm0 1.547v1.453l2.5-.625v-1.453zm0 4.453l2.5-.625v-1.453l-2.5.625zm0 1.547V19.5q0 1.25 1.25 1.25t1.25-1.25v-3.039z");
}
</style><path class="jfkpvyb6x"/>`,
		"fallback": "uix-solid:hex-bolt",
	});
}

export default Component;
