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
		"content": `<style>.ki8wc7f0v {
  fill: currentColor;
  d: path("M14.154 12.462h4.077v-1h-4.077zm0-2.77h4.077v-1h-4.077zm-8.385 5.616h6.616v-.166q0-.875-.88-1.355t-2.428-.48t-2.429.48t-.879 1.355zm4.374-4.05q.434-.433.434-1.066t-.434-1.066t-1.066-.434t-1.066.434t-.434 1.066t.434 1.067t1.066.433t1.066-.433M3 19V5h18v14z");
}
</style><path class="ki8wc7f0v"/>`,
		"fallback": "material-symbols-light:id-card-sharp",
	});
}

export default Component;
