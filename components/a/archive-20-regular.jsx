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
		"content": `<style>.tn43e9b_c {
  fill: currentColor;
  d: path("M8.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM2 4.75C2 3.784 2.784 3 3.75 3h12.5c.966 0 1.75.784 1.75 1.75v1.5c0 .698-.409 1.3-1 1.582V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.832A1.75 1.75 0 0 1 2 6.25zM3.75 4a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75zM4 8v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8z");
}
</style><path class="tn43e9b_c"/>`,
		"fallback": "fluent:archive-20-regular",
	});
}

export default Component;
