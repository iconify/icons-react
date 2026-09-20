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
		"content": `<style>.yg28chbur {
  fill: currentColor;
  d: path("M10 5a3 3 0 0 1-2.145 2.876c.178.223.416.483.72.744c.726.622 1.834 1.252 3.425 1.363a3 3 0 1 1 .168 1.01c-1.96-.078-3.342-.841-4.243-1.613a7 7 0 0 1-.425-.398v3.06a3 3 0 1 1-1 0V7.958A3 3 0 1 1 10 5");
}
</style><path class="yg28chbur"/>`,
		"fallback": "fluent:branch-20-filled",
	});
}

export default Component;
