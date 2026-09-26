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
		"content": `<style>.nw9u85b5f {
  fill: currentColor;
  d: path("M12.64 1.02a.5.5 0 0 1 .34.62l-5 17a.5.5 0 0 1-.96-.28l5-17a.5.5 0 0 1 .62-.34M5.127 5.169a.5.5 0 0 1 .748.664L2.169 10l3.705 4.168a.5.5 0 0 1-.748.664l-4-4.5a.5.5 0 0 1 0-.664zm9.042-.042a.5.5 0 0 1 .706.042l4 4.5a.5.5 0 0 1 0 .664l-4 4.5a.5.5 0 0 1-.748-.664L17.831 10l-3.705-4.168a.5.5 0 0 1 .042-.706");
}
</style><path class="nw9u85b5f"/>`,
		"fallback": "fluent:code-20-regular",
	});
}

export default Component;
