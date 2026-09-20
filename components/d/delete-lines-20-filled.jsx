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
		"content": `<style>.fy6315adx {
  fill: currentColor;
  d: path("M11.5 4a1.5 1.5 0 0 0-3 0zm-4 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-.808 7H11.5a1.5 1.5 0 0 0-1.118 2.5a1.5 1.5 0 0 0-.382 1c0 .384.144.735.382 1a1.5 1.5 0 0 0-.297 1.5H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zm4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z");
}
</style><path class="fy6315adx"/>`,
		"fallback": "fluent:delete-lines-20-filled",
	});
}

export default Component;
