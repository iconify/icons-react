import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h9ckpvbns {
  fill: currentColor;
  d: path("M30.866 10.134a1.25 1.25 0 0 1 1.768-1.768l11 11a1.25 1.25 0 0 1 0 1.768l-11 11a1.25 1.25 0 0 1-1.768-1.768l8.866-8.866H22.75c-8.975 0-16.25 7.275-16.25 16.25a1.25 1.25 0 1 1-2.5 0C4 27.395 12.395 19 22.75 19h16.982z");
}
</style><path class="h9ckpvbns"/>`,
		"fallback": "fluent:arrow-forward-48-regular",
	});
}

export default Component;
