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
		"content": `<style>.abtstjb8x {
  fill: currentColor;
  d: path("M4.25 4A2.25 2.25 0 0 0 2 6.25V8h18.5v11.25a.75.75 0 0 0 1.5 0v-13A2.25 2.25 0 0 0 19.75 4zM12 9.5H2v7.75A2.75 2.75 0 0 0 4.75 20h4.5A2.75 2.75 0 0 0 12 17.25zm-7 3.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75");
}
</style><path class="abtstjb8x"/>`,
		"fallback": "fluent:desk-24-filled",
	});
}

export default Component;
