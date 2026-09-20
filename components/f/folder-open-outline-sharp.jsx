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
		"content": `<style>.eeteyhbqe {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2h9.231v1h-9.633l-2-2H4v11.962l2.266-7.577h16.6L20.288 19zm2.042-1H19.54l1.973-6.616H7.015zm0 0l1.974-6.616zM4 8V6z");
}
</style><path class="eeteyhbqe"/>`,
		"fallback": "material-symbols-light:folder-open-outline-sharp",
	});
}

export default Component;
