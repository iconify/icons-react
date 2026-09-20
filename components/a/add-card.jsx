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
		"content": `<style>.ohavl3fpm {
  fill: currentColor;
  d: path("M4 11.192h16V8.808H4zM19.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616V12.5h-1.5q-2.075 0-3.537 1.463T14.5 17.5V19z");
}
</style><path class="ohavl3fpm"/>`,
		"fallback": "material-symbols-light:add-card",
	});
}

export default Component;
