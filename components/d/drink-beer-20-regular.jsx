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
		"content": `<style>.fly0l_kvf {
  fill: currentColor;
  d: path("M12.5 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0zm-3-.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5m-2 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0zm-1-6A2.5 2.5 0 0 0 4 4.5v11.75c0 .966.784 1.75 1.75 1.75h7.5A1.75 1.75 0 0 0 15 16.25V15h.5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 5H15v-.5A2.5 2.5 0 0 0 12.5 2zM15 6h.5A1.5 1.5 0 0 1 17 7.5v5a1.5 1.5 0 0 1-1.5 1.5H15zM5 4.5A1.5 1.5 0 0 1 6.5 3h6A1.5 1.5 0 0 1 14 4.5V5H5zM5 6h9v10.25a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75z");
}
</style><path class="fly0l_kvf"/>`,
		"fallback": "fluent:drink-beer-20-regular",
	});
}

export default Component;
