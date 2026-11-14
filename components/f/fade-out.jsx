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
		"content": `<style>.dhnm9obep {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.625 2.25h-9.25q-2.123 0-3.624 1.501T2.25 7.375v9.25q0 2.123 1.501 3.624t3.624 1.501h9.25q2.123 0 3.624-1.501t1.501-3.624v-9.25q0-2.123-1.501-3.624T16.625 2.25M5.75 10.121q0-1.504 1.39-2.079t2.451.489l5.878 5.878q1.064 1.062.489 2.451t-2.079 1.39H8q-2.25 0-2.25-2.25z");
}
</style><path class="dhnm9obep"/>`,
		"fallback": "uix-solid:fade-out",
	});
}

export default Component;
