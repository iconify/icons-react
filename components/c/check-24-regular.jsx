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
		"content": `<style>.tmazgsnhk {
  fill: currentColor;
  d: path("M21.78 5.78a.75.75 0 0 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06zm.167 1.248q.053.253.053.522v6.9A2.55 2.55 0 0 1 19.45 17H4.55A2.55 2.55 0 0 1 2 14.45v-6.9A2.55 2.55 0 0 1 4.55 5h14.475l-1.5 1.5H4.55c-.58 0-1.05.47-1.05 1.05v6.9c0 .58.47 1.05 1.05 1.05h14.9c.58 0 1.05-.47 1.05-1.05V8.475zM4.5 9.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75");
}
</style><path class="tmazgsnhk"/>`,
		"fallback": "fluent:check-24-regular",
	});
}

export default Component;
