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
		"content": `<style>.rkmnuzbaa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 1.75H6q-1.76 0-3.005 1.245T1.75 6v5.5q0 1.76 1.245 3.005T6 15.75h12q1.76 0 3.005-1.245T22.25 11.5V6q0-1.76-1.245-3.005T18 1.75m-13 16h14q2.25 0 2.25 2.25T19 22.25H5q-2.25 0-2.25-2.25T5 17.75");
}
</style><path class="rkmnuzbaa"/>`,
		"fallback": "uix-solid:desktop",
	});
}

export default Component;
