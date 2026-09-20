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
		"content": `<style>.dzs6q9bgt {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm8.692-2.692h6.616v-.166q0-.875-.88-1.355q-.878-.48-2.428-.48t-2.429.48t-.879 1.355zm4.374-4.05q.434-.433.434-1.066t-.434-1.066q-.433-.434-1.066-.434t-1.066.434t-.434 1.066t.434 1.067q.433.433 1.066.433t1.066-.433");
}
</style><path class="dzs6q9bgt"/>`,
		"fallback": "material-symbols-light:folder-shared-sharp",
	});
}

export default Component;
