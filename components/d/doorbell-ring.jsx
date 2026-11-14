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
		"content": `<style>.j5v3eybbn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1.75q2.382 0 4.066 1.684T17.75 7.5v9q0 2.382-1.684 4.066T12 22.25t-4.066-1.684T6.25 16.5v-9q0-2.382 1.684-4.066T12 1.75m0 9.75q-3 0-3 3t3 3t3-3t-3-3");
}
</style><path class="j5v3eybbn"/>`,
		"fallback": "uix-solid:doorbell-ring",
	});
}

export default Component;
