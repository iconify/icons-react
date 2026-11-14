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
		"content": `<style>.cwwub_b-p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 1.75h6q1.76 0 3.005 1.245T16.75 6v9.5q0 1.76-1.245 3.005T12.5 19.75h-6q-1.76 0-3.005-1.245T2.25 15.5V6q0-1.76 1.245-3.005T6.5 1.75");
}
</style><path class="cwwub_b-p"/>`,
		"fallback": "uix-solid:code-embed",
	});
}

export default Component;
