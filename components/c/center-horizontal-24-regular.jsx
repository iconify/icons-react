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
		"content": `<style>.kp-kk6yos {
  fill: currentColor;
  d: path("M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0zm15 0a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0zM10.25 5A2.25 2.25 0 0 0 8 7.25v9.5A2.25 2.25 0 0 0 10.25 19h3.5A2.25 2.25 0 0 0 16 16.75v-9.5A2.25 2.25 0 0 0 13.75 5zM9.5 7.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75z");
}
</style><path class="kp-kk6yos"/>`,
		"fallback": "fluent:center-horizontal-24-regular",
	});
}

export default Component;
