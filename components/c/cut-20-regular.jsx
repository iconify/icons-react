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
		"content": `<style>.ys-3ibufa {
  fill: currentColor;
  d: path("M5.92 2.228a.5.5 0 0 0-.84.544L9.405 9.43L7.48 12.39a3 3 0 1 0 .779.636L10 10.348l1.74 2.68a3 3 0 1 0 .779-.636zM14 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4M4 15a2 2 0 1 1 4 0a2 2 0 0 1-4 0m7.192-6.489l-.596-.918l3.485-5.365a.5.5 0 0 1 .838.544z");
}
</style><path class="ys-3ibufa"/>`,
		"fallback": "fluent:cut-20-regular",
	});
}

export default Component;
