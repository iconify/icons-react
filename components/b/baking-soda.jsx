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
		"content": `<style>.i9kp5pb0r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.338 4.272q-.539 1.012.051 1.995l.032.053Q4.25 7.137 4.25 9.125v9.75q0 3.375 3.375 3.375h8.75q3.375 0 3.375-3.375v-9.75q0-1.988-1.171-2.805l.032-.053q.59-.983.051-1.995l-.576-1.081Q17.45 2 16.1 2H7.9Q6.55 2 5.914 3.191zM8.25 14q0-3.75 3.75-3.75T15.75 14T12 17.75T8.25 14");
}
</style><path class="i9kp5pb0r"/>`,
		"fallback": "uix-solid:baking-soda",
	});
}

export default Component;
