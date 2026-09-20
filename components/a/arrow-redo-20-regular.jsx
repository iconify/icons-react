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
		"content": `<style>.hc662wgqc {
  fill: currentColor;
  d: path("M15.003 2.5a.5.5 0 0 1 1 0v4.9a.6.6 0 0 1-.6.6h-4.9a.5.5 0 0 1 0-1h3.594l-3.473-3.019a4 4 0 1 0-5.248 6.038l8.172 7.104a.5.5 0 1 1-.656.754L4.72 10.774a5 5 0 1 1 6.56-7.547l3.723 3.236z");
}
</style><path class="hc662wgqc"/>`,
		"fallback": "fluent:arrow-redo-20-regular",
	});
}

export default Component;
