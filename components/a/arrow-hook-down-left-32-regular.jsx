import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kt2d31bak {
  fill: currentColor;
  d: path("M19.36 7.009A7 7 0 0 1 19 21H9.414l3.293 3.293l.068.076a1 1 0 0 1-1.406 1.406l-.076-.068l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L9.414 19H19a5 5 0 0 0 .257-9.993L19 9h-9a1 1 0 0 1 0-2h9z");
}
</style><path class="kt2d31bak"/>`,
		"fallback": "fluent:arrow-hook-down-left-32-regular",
	});
}

export default Component;
