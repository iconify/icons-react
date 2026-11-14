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
		"content": `<style>.gjw73ib6b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.75 12q-.001-3.832 2.708-6.543q2.71-2.71 6.542-2.71t6.542 2.71Q21.251 8.168 21.25 12q.001 3.832-2.708 6.543q-2.71 2.71-6.542 2.71t-6.542-2.71T2.75 12m6.245-3.005Q7.75 10.24 7.75 12t1.245 3.005T12 16.25t3.005-1.245T16.25 12t-1.245-3.005T12 7.75T8.995 8.995");
}
</style><path class="gjw73ib6b"/>`,
		"fallback": "uix-solid:home-smoke-detector",
	});
}

export default Component;
