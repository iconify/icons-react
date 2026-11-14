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
		"content": `<style>.i2_q0pb4e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 9.75h16q2.25 0 2.25 2.25T20 14.25H4q-2.25 0-2.25-2.25T4 9.75");
}
</style><path class="i2_q0pb4e"/>`,
		"fallback": "uix-solid:em-dash",
	});
}

export default Component;
