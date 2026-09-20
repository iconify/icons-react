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
		"content": `<style>.zludvju4a {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5v3a2.5 2.5 0 0 0 5 0V8h2.268c.221.384.567.687.982.855v6.29c-.415.168-.76.471-.982.855H8v-.5a2.5 2.5 0 0 0-5 0v3a2.5 2.5 0 0 0 5 0v-1h2.063a2 2 0 0 0 3.874 0H16v1a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0v.5h-2.268a2 2 0 0 0-.982-.855v-6.29c.415-.168.76-.471.982-.855H16v.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0v1h-2.063a2 2 0 0 0-3.874 0H8v-1A2.5 2.5 0 0 0 5.5 3m-1 2.5a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0zm1 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m12-9a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0zm1 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1");
}
</style><path class="zludvju4a"/>`,
		"fallback": "fluent:drive-train-24-regular",
	});
}

export default Component;
