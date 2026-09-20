import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ntjau44pb {
  fill: currentColor;
  d: path("M238 80v72a6 6 0 0 1-12 0V94.48L124.24 196.24a6 6 0 0 1-8.48 0l-96-96a6 6 0 0 1 8.48-8.48L120 183.51L217.52 86H160a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6");
}
</style><path class="ntjau44pb"/>`,
		"fallback": "ph:arrow-elbow-right-light",
	});
}

export default Component;
