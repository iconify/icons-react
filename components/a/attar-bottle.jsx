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
		"content": `<style>.nimug8bcy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.541 6.756Q9 6.024 9 4.75q0-3 3-3t3 3q0 1.274-.541 2.006q.041.119.041.244v2.207q1.247.494 2.273 1.52q1.977 1.977 1.977 4.773t-1.977 4.773T12 22.25t-4.773-1.977T5.25 15.5t1.977-4.773Q8.253 9.701 9.5 9.207V7q0-.125.041-.244M11 7.75v1.067q.486-.067 1-.067t1 .067V7.75z");
}
</style><path class="nimug8bcy"/>`,
		"fallback": "uix-solid:attar-bottle",
	});
}

export default Component;
