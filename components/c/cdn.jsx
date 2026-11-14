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
		"content": `<style>.ofidp5b2f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.25 4q0-2.25-2.25-2.25T1.75 4T4 6.25T6.25 4M20 1.75q2.25 0 2.25 2.25T20 6.25T17.75 4T20 1.75M5 12q-.001 2.9 2.049 4.951Q9.1 19.002 12 19.002t4.951-2.051Q19.001 14.9 19 12q.001-2.9-2.049-4.951Q14.9 4.998 12 4.998T7.049 7.049T5 12m1.25 8q0-2.25-2.25-2.25T1.75 20T4 22.25T6.25 20M20 17.75q2.25 0 2.25 2.25T20 22.25T17.75 20T20 17.75");
}
</style><path class="ofidp5b2f"/>`,
		"fallback": "uix-solid:cdn",
	});
}

export default Component;
