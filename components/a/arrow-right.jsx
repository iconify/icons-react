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
		"content": `<style>.wt594-ldn {
  fill: currentColor;
  d: path("M10.5 15.808V8.192L14.308 12z");
}
</style><path class="wt594-ldn"/>`,
		"fallback": "material-symbols-light:arrow-right",
	});
}

export default Component;
