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
		"content": `<style>.i78l8hb_m {
  fill: currentColor;
  d: path("M3 5.5a2.5 2.5 0 0 1 5 0v1h2.063a2 2 0 0 1 3.874 0H16v-1a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0V8h-2.268a2 2 0 0 1-.982.855v6.29c.415.168.76.471.982.855H16v-.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-1h-2.063a2 2 0 0 1-3.874 0H8v1a2.5 2.5 0 0 1-5 0v-3a2.5 2.5 0 0 1 5 0v.5h2.268c.221-.384.567-.687.982-.855v-6.29A2 2 0 0 1 10.268 8H8v.5a2.5 2.5 0 0 1-5 0z");
}
</style><path class="i78l8hb_m"/>`,
		"fallback": "fluent:drive-train-24-filled",
	});
}

export default Component;
