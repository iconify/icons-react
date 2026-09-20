import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p-7n626zd {
  fill: currentColor;
  d: path("M12.354 3.854a.5.5 0 0 0-.708-.708l-4.5 4.5a.5.5 0 0 0 0 .708l4.5 4.5a.5.5 0 0 0 .708-.708L8.207 8zM4 3.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-1 0z");
}
</style><path class="p-7n626zd"/>`,
		"fallback": "fluent:arrow-previous-16-regular",
	});
}

export default Component;
