import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xdrr_kd7t {
  fill: currentColor;
  d: path("M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v3h4.75V4.5zm4.5 0v4.75h4.75v-3a1.75 1.75 0 0 0-1.75-1.75zm4.75 6.25h-4.75v4.75h3a1.75 1.75 0 0 0 1.75-1.75zM9.25 15.5v-4.75H4.5v3c0 .966.784 1.75 1.75 1.75zM3 6.25A3.25 3.25 0 0 1 6.25 3h7.5A3.25 3.25 0 0 1 17 6.25v7.5A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75z");
}
</style><path class="xdrr_kd7t"/>`,
		"fallback": "fluent:border-all-20-filled",
	});
}

export default Component;
